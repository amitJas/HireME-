import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UsersserviceService {
  public data: any;
  public fireAuth: any;
  public userProfile: any;

  constructor() {
    this.fireAuth = firebase.auth(); //
    this.userProfile = firebase.database().ref('user');
  }
  //checks if input email and password existe in the firebase data
  loginUser(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  signupUserService(account:{}){

   // return this.fireAuth.createUserWithEmailAndPassword(account['email'] ,account['password').then(newUser) => {
    //
    // this.fireAuth.signInWithEmailAndPassword(account['email'] ,account['password').then()
    // this.userProfile.child(authen)


    // //firebase.auth().createUserWithEmailAndPassword(account['email'] ,account['password'] ).then(newUser) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // ...
   // });

  }

}
