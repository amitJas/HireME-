import { UsersserviceProvider } from './../../providers/usersservice/usersservice';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import * as firebase from 'firebase'


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
              public navCtrl: NavController, public navParams: NavParams) {
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

    //email and password check
    this.userrsService.loginUser(this.email, this.password).then(authData => {
      //successful
      loader.dismiss(); //stop the loder icon
      this.navCtrl.setRoot(HomePage);
    }, error => {
      loader.dismiss();
      //Unable to log in creat massege in pupap
      let toast = this.toastCtrl.create({
        message: error,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });

  }

  forgotPassword(){

  }

  redirectToSignup(){

  }
}
