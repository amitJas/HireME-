import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({ providedIn: 'root' })

export class FirebaseService {

  public currUserDepartment: any;
  public currDepartment: any;
  public currCandidate:any  ;
  public callCandidateName:any;
  // public currDepartment: any;


  constructor(private db: AngularFirestore) { }

  isAuser(employeeNum){
    //return the all colation if firebase object
    // this.db.collection('Users').get().subscribe((snapshot) => {
    //   console.log(snapshot.docs);
    // })
    //return all the colation with data
    // this.db.collection('Users').get().subscribe((snapshot) => {
    //   snapshot.docs.forEach(doc => {
    //     console.log(doc.data())
    //   })
    // })
    console.log(employeeNum)
    console.log(this.db.collection('Users',ref => ref.where('employeeNum','==',employeeNum)).get())
    return this.db.collection('Users',ref => ref.where('employeeNum','==',employeeNum)).get();
  }


  setArrayOfNames(doc){
    this.callCandidateName.push(doc.data().name);
    console.log(this.callCandidateName)
  }
  
  getUserData() {
    var usersRef = this.db.collection("Users").doc('User1').get().subscribe(function(result) {
      console.log(result.data())
    })
  }

  getCandidateData() {
    var usersRef = this.db.collection("Candidate").doc('Candidate1').get().subscribe(function(result) {
      console.log(result.data())
    })
  }

  getAllCandidates() {
    return this.db.collection("Candidates").get();
  }

  // setUserData(userName:string, userEmail: string,userNum:number) {
  //   console.log('in setUsersData');
  //   console.log(userName,userEmail,userNum);
  //   this.db.collection('Users').add({
  //     name: userName,
  //     email: userEmail,
  //     employeeNumber: userNum
  //   });
  // }

  
  
}
