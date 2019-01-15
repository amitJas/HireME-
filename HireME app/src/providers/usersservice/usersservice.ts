
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

@Injectable()
export class UsersserviceProvider {

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

}
