import { FirebaseService } from './../firebase-service/firebase-service.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';



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
  
  constructor(private firebase: FirebaseService,public alertController:AlertController) {  
  }
  

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'no mail like this',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
  
  SubmitLoginForm(){
    console.log('ionViewDidLoad RegisterPage');
    console.log(this.name,this.email,this.employeeNum);
    
    if(this.email.search('@meuhedet.co.il') < 0)
    {
      console.log(this.email.search('@meuhedet.co.il'));
      this.presentAlert();
      
      
    }
    else{ //sucsses
      this.firebase.setUserData(this.name,this.email,this.employeeNum);
    }

    
  }

  occupationText(){
    
  }
}
