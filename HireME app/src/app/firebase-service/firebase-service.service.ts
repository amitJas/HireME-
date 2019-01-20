import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })

export class FirebaseService {

  constructor(private db: AngularFirestore) { }

  getUserData() {
    var usersRef = this.db.collection("Users").doc('User1').get().subscribe(function(result) {
      console.log(result.data())
    })
  }

  setUserData() {
    this.db.collection('Users').add({
      name: 'karin',
      last: 'mar',
      age: 20
    })
  }

}
