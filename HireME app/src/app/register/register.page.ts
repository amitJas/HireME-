import { Component, OnInit } from '@angular/core';
//import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public occupation: string;
  public email: string;
  public password: string;
  public employeeNum: number;
  public name: string;
  public phone: string;
  
  constructor() {
  }

  ngOnInit() {
  }
  
  SubmitLoginForm(){
    console.log('ionViewDidLoad RegisterPage');
  }

  occupationText(){
    
  }
}
