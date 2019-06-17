import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController,ModalController  } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase-service/firebase-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  public loading: any;
  public input = null

  constructor(private router: Router,public loadingCtrl: LoadingController, public alertController: AlertController,public firebase: FirebaseService
    ,public modalController: ModalController){}
  
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
      header: ' סיסמה שגויה, אנא נסה שנית    ',
      mode: 'ios',
      buttons: ['הבנתי']
     

    });

     alert.present();
  }
  
  async presentEmptyFildAlert() {
    const alert = await this.alertController.create({
      header: 'אנא מלא את השדות הנדרשים',
      mode: 'ios',
      buttons: ['הבנתי']
    });

    await alert.present();
  }

  submitLogin(){
    let loader = this.presentLoading().then(() => {
      if(!this.input ){
        this.loading.dismiss()
        this.presentEmptyFildAlert()
      }else{
        this.firebase.isAuser(this.input).subscribe((snap) =>{
          if(!snap.empty){
            snap.docs.forEach((doc) => {
              this.firebase.user = doc.data().name;
              doc.data().admin ? this.firebase.admin = true : this.firebase.userDep = doc.data().department
            })
            this.loading.dismiss()
            this.router.navigate(['home'])
          }
          else{
            this.loading.dismiss()
            this.presentAlert()
          }
        })
      }
    });
  }
}
