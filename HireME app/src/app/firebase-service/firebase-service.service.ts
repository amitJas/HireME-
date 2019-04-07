import { Injectable } from '@angular/core';
import { AngularFirestore, docChanges } from '@angular/fire/firestore';
import { stringify } from '@angular/compiler/src/util';


@Injectable({ providedIn: 'root' })

export class FirebaseService {
  
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
      var namesArr =  this.db.collection("Candidates").get().subscribe((snap) =>{
        snap.docs.forEach(doc => {
          //console.log(doc.data().name)
          allCandidteName.push({
            name: doc.data().name,
            progres:doc.data().pProgress
          })
      })
    })
    return allCandidteName
  }

  //adding new candidate to firebase, no station yet only data
  addNewCandidate(candidate){
  this.db.collection('Candidates').doc('Candidate').collection('Data').doc('CandidateDoc').set({
    ferstname: candidate.firstname,
    lestname: candidate.lestname,
    id: candidate.id,
    job: candidate.job,
    startdate: candidate.strtProcess,
    phone: candidate.phone,
    email: candidate.email,
    progress: 0
  })
  

  }

}
