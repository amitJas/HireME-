import { Injectable } from '@angular/core';
import { AngularFirestore, docChanges } from '@angular/fire/firestore';
import { stringify } from '@angular/compiler/src/util';


@Injectable({ providedIn: 'root' })

export class FirebaseService {
  
  private stations = 6;
  public currUser: any;
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
  this.db.collection(this.department).doc('Candidate').collection('Data').add({
      name: candidate.name,
      id: candidate.id,
      job: candidate.job,
      startdate: Date.parse(candidate.startdate),
      lisens: candidate.lisens,
      phone: candidate.phone,
      email: candidate.email,
      progress: 0
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
    console.log("addStation",station)
      this.db.collection(this.department).doc('Station').collection(station).add({
        id: this.firebaseCID
      })
    }
  
    setStationFile(station,filde,val){
      this.db.collection(this.department).doc('Station').collection(station,ref => ref.where('id','==',this.firebaseCID)).add({
        filde:val
      })
    }
  
    getStation(station){
      console.log('getStation',station)
     return this.db.collection(this.department).doc('Station').collection(station,ref => ref.where('id','==',this.firebaseCID)).get()
    }

  

}
