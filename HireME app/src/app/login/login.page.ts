import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase-service/firebase-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string;
  public password: string;
  
  constructor(private router: Router,public loadingCtrl: LoadingController, public alertController: AlertController,public firebase: FirebaseService){}
  
  ngOnInit() {
    
  }

  //loding icon
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Hellooo',
      duration: 2000
    });
    return await loading.present();
  }

  // //alert icon
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  submitLogin(){
    
   // this.presentLoading();
    this.router.navigate(['home']);

  }

  forgotPassword(){

  }

  redirectToRegister(){
   this.router.navigate(['register']);
  }
}
