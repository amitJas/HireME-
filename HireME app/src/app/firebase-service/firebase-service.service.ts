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

  addCandidate(candiate){
    // console.log('in setUsersData');
    // console.log(userName,userEmail,userNum);
    // this.db.collection('Users').add({
    //   name: userName,
    //   email: userEmail,
    //   employeeNumber: userNum
    // });
  }

}
