import { UsersserviceProvider } from './../../providers/usersservice/usersservice';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import * as firebase from 'firebase';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UsersserviceProvider]
})
export class LoginPage {
  
  //registerCredentials = { email: '', password: '' };
  public email: string;
  public password: string;

  constructor(public userrsService: UsersserviceProvider, public toastCtrl: ToastController, public loadingCtrl: LoadingController, 
              public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  // public createAccount() {
  //   this.navCtrl.push('RegisterPage');
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitLogin(){

    //lode icon of ionic
    let loader = this.loadingCtrl.create({
      content: "Plaese wait..."
    });
    loader.present();

    /*email and password check, if exsite in firebace do... else do.....*/
    this.userrsService.loginUser(this.email, this.password).then(authData => {
      //successful
      loader.dismiss(); //stop the loder icon
      this.navCtrl.setRoot(HomePage);
    }, error => {
      loader.dismiss();
      //Unable to log in creat massege in pupap
      let alert = this.alertCtrl.create({
        title: 'לא נמצא שם משתמש זה במערכת',
        subTitle: 'אנא בדוק כי כתבת נכון',
        buttons: ['הבנתי'],
        cssClass: 'alert'
      });
      alert.present();
    });

  }

  forgotPassword(){

  }

  redirectToRegister(){
    this.navCtrl.push('RegisterPage');
  }
}
