import { Component, OnInit } from '@angular/core';
// import { UsersserviceService } from '../usersservice.service';
// import { HomePage } from '../home/home.page';

// import * as firebase from 'firebase';
// import { AlertController} from 'ionic-angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  ngOnInit() {
  }
  public email: string;
  public password: string;
  constructor(private router: Router){

  }
 
  // submitLogin(){

  //   //lode icon of ionic
  //   let loader = this.loadingCtrl.create({
  //     content: "Plaese wait..."
  //   });
  //   loader.present();

  //   /*email and password check, if exsite in firebace do... else do.....*/
  //   this.userrsService.loginUser(this.email, this.password).then(authData => {
  //     //successful
  //     loader.dismiss(); //stop the loder icon
  //     this.navCtrl.setRoot(HomePage);
  //   }, error => {
  //     loader.dismiss();
  //     //Unable to log in creat massege in pupap
  //     let alert = this.alertCtrl.create({
  //       title: 'לא נמצא שם משתמש זה במערכת',
  //       subTitle: 'אנא בדוק כי כתבת נכון',
  //       buttons: ['הבנתי'],
  //       cssClass: 'alert'
  //     });
  //     alert.present();
  //   });

  // }

  // forgotPassword(){

  // }

  redirectToRegister(){
   this.router.navigate(['register']);
  }
}
