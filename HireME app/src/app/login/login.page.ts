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
      if(!this.employeeNum || this.isANmber(this.employeeNum) == false){
        this.loading.dismiss()
        this.presentEmptyFildAlert();
      }else{
        this.firebase.isAuser(this.employeeNum).subscribe((snap) =>{
          if(!snap.empty){
            snap.docs.forEach((doc) => {
              this.firebase.user = doc.data().name;
              //doc.data().
              this.firebase.userDep = doc.data().department
            })
            this.loading.dismiss()
            console.log("yes",this.firebase.user)
            this.router.navigate(['home'])
          }
          else{
            console.log("no")
          }
        })
      }
    });
  }
}
