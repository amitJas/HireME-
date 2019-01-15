import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public occupation: string;
  public email: string;
  public password: string;
  public employeeNum: number;
  public name: string;
  public phone: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  SubmitLoginForm(){
    console.log('ionViewDidLoad RegisterPage');
  }

  occupationText(){
    
  }
}
