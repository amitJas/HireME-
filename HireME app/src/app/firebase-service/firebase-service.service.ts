import { Injectable } from '@angular/core';
import { AngularFirestore, docChanges } from '@angular/fire/firestore';
import { stringify } from '@angular/compiler/src/util';


@Injectable({ providedIn: 'root' })

export class FirebaseService {
  
  private stations = 6;
  public currUser: any;
  public currUserDepartment: any;
  public currDepartment: any;
  public currCandidate:{};
  
  
  constructor(private db: AngularFirestore) { }

  //chkein the user
  isAuser(employeeNum){
    return this.db.collection('Users',ref => ref.where('employeeNum','==',employeeNum)).get()
  }

 
  //return array of all the candidate name in the store - Finished!!!
  getAllCandidate(){
      //console.log("in firebase get all candeats names")
      let allCandidteName = [];
      var namesArr =  this.db.collection(this.currUserDepartment).doc('Candidate').collection('Data').get().subscribe((snap) =>{
        snap.docs.forEach(doc => {
          //console.log(doc.data().name)
          allCandidteName.push({
            name: doc.data().name,// doc.data().firstname + " " + doc.data().lestname,
            progres: this.calculatProgress(doc.data().progress,this.stations)
          })
      })
    })
    return allCandidteName
  }

  //adding new candidate to firebase, no station yet only data
  addNewCandidate(candidate){
  this.db.collection(this.currUserDepartment).doc('Candidate').collection('Data').add({
      name: candidate.name,
      id: candidate.id,
      job: candidate.job,
      //startdate: candidate.strtProcess,
      lisens: candidate.lisens,
      phone: candidate.phone,
      email: candidate.email,
      progress: 0
    })
  }

  getCandidateData(candidateName){
    return this.db.collection(this.currUserDepartment).doc('Candidate').collection('Data',ref => ref.where("name","==",candidateName)).get()
  }

  
  calculatProgress(progress,num){
    if(progress)
      return Math.round((progress / num ) * 100)
    return  progress  
  }


  convertDate(){
    
  }
}
