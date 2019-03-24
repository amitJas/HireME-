import { Injectable } from '@angular/core';
import { AngularFirestore, docChanges } from '@angular/fire/firestore';


@Injectable({ providedIn: 'root' })

export class FirebaseService {
  
  public currUser: any;
  public currUserDepartment: any;
  public currDepartment: any;
  public currCandidate:any  ;
  
  constructor(private db: AngularFirestore) { }

  isAuser(employeeNum){
    console.log(employeeNum)
    let name = ""
    //console.log(this.db.collection('Users',ref => ref.where('employeeNum','==',employeeNum)).get())
    let chaec = this.db.collection('Users',ref => ref.where('employeeNum','==',employeeNum)).get().subscribe((res) =>{
       res.docs.forEach((doc) =>{
        console.log("doc.data().name",doc.data().name)
        name = doc.data().name
        return name
        console.log("name",name)
      })
    })
    console.log("chaec",chaec)
   
    return chaec
  }

 
  //return array of all the candidate name in the store - Finished!!!
  getAllCandidateName(){
      //console.log("in firebase get all candeats names")
      let allCandidteName = [];
      var namesArr =  this.db.collection("Candidates").get().subscribe((snap) =>{
        snap.docs.forEach(doc => {
          console.log(doc.data().name)
          allCandidteName.push(doc.data().name)
      })
    })
    return allCandidteName
  }

}
