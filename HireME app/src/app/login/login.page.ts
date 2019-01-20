import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
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
  constructor(private router: Router,public loadingCtrl: LoadingController, public alertController: AlertController){}
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
    
    this.presentLoading();
  

  }

  forgotPassword(){

  }

  redirectToRegister(){
   this.router.navigate(['register']);
  }
}
