import { Injectable } from '@angular/core';
import { AngularFirestore, docChanges } from '@angular/fire/firestore';


@Injectable({ providedIn: 'root' })

export class FirebaseService {
  
  private stations = 6;
  public user: any;
  public department: any;
  public firebaseCID: any;
  public firebaseCName: any;
  
  constructor(private db: AngularFirestore) { }

  //chkein the user
  isAuser(employeeNum){
    return this.db.collection('Users',ref => ref.where('employeeNum','==',employeeNum)).get()
  }

 
  //return array of all the candidate name in the store - Finished!!!
  getAllCandidate(){
      let allCandidteName = [];
      var namesArr =  this.db.collection(this.department).doc('Candidate').collection('Data').get().subscribe((snap) =>{
        snap.docs.forEach(doc => {
          allCandidteName.push({
            name: doc.data().name,
            progres: this.calculatProgress(doc.data().progress,this.stations)
          })
      })
    })
    return allCandidteName
  }

  //adding new candidate to firebase, no station yet only data
  addNewCandidate(candidate){
    console.log(candidate.strtProcess)
  this.db.collection(this.department).doc('Candidate').collection('Data').doc(candidate.id.toString()).set({
      name: candidate.name,
      id: candidate.id,
      job: candidate.job,
      startdate: Date.parse(candidate.startdate),
      lisens: candidate.lisens,
      phone: candidate.phone,
      email: candidate.email,
      progress: 0,
      setingUser: this.user,
      stationProgres:[  {name: "interview", progress: 0},
                        {name: "psifas" ,progress: 0},
                        {name: "salary", progress: 0} ,
                        {name: "forms",progress: 0},
                        {name: "system",progress: 0}
                      ]        
    })
  }

  getCandidateData(){
    return this.db.collection(this.department).doc('Candidate').collection('Data',ref => ref.where("name","==",this.firebaseCName)).get()
  }

  
  calculatProgress(progress,num){
    if(progress)
      return Math.round((progress / num ) * 100)
    return  progress  
  }


  convertDate(){
    
  }

  addStation(station){
    //console.log("addStation",station)
      this.db.collection(this.department).doc('Station').collection(station).doc(this.firebaseCID.toString()).set({
        progress: 0
      },{ merge: true })
    }
  
    setStationFile(station,filde,val){
      //console.log('setStationFile',station ,filde,val)
      let temp = this.db.collection(this.department).doc('Station').collection(station).doc(this.firebaseCID.toString())
      temp.set({
        [filde] : val,
      }, { merge: true })
      // temp.get().subscribe((snap) =>{
      //     snap.data().progress += 1;
      //   })
    }

    getStation(station){
      //console.log('getStation',station,this.firebaseCID.toString())
     return this.db.collection(this.department).doc('Station').collection(station).doc(this.firebaseCID.toString()).get()
    }

    deletCandidate(alertData){
      let sationList = ["ראיון אישי","מבחן פסיפס","הצעת שכר","חובקן טפסים","אישור משאבי אנוש","פתיחת מועמד במערכת"];
      this.setDeleteDate(alertData) //save the resun for deleting this canadidt
      this.db.collection(this.department).doc('Candidate').collection('Data').doc(this.firebaseCID.toString()).delete() // delet all candidate date
      for( let station of sationList)
        this.db.collection(this.department).doc('Station').collection(station).doc(this.firebaseCID.toString()).delete() // delet all candidate stations date
    }

    setDeleteDate(data){
      console.log('setDeleteDate')
      this.db.collection('סגורים').doc(this.firebaseCID.toString()).set({
        id: this.firebaseCID.toString(),
        name: this.firebaseCName,
        hoWdelete: this.user,
        when:  new Date().getTime(),
        cause: data
      })
    }


    setProgress(){

    }
}
