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

  public employeeNum: number;
  public loading;

  constructor(private router: Router,public loadingCtrl: LoadingController, public alertController: AlertController,public firebase: FirebaseService){}
  
  ngOnInit() {
    
  }
  
  isANmber(number)
  {return !/\D/.test(number);}

  //loding icon
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      duration: 2000
    });
    return await this.loading.present();
  }

  // //alert icon
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'סיסמה שגויה',
      buttons: ['OK']

    });

    await alert.present();
  }

  async presentEmptyFildAlert() {
    const alert = await this.alertController.create({
      header: 'אנא מלא את שדה הסיסמה',
      buttons: ['OK']
    });

    await alert.present();
  }

  submitLogin(){
    let loader = this.presentLoading().then(() => {
      console.log( Number.isSafeInteger(this.employeeNum))
      if(!this.employeeNum || this.isANmber(this.employeeNum) == false){
        this.loading.dismiss()
        this.presentEmptyFildAlert();
      }else{
        //add function to chec with firestore
        this.firebase.isAuser(this.employeeNum)
        this.loading.dismiss()
        this.router.navigate(['home'])
      }
    });
  }
}
