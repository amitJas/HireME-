import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { EmailValidator } from '@angular/forms';
=======
import { FirebaseService } from '../firebase-service/firebase-service.service';
>>>>>>> 3cad537984b88923f13c6737d1c2c9b36e4176af

@Component({
  selector: 'app-new-candidate',
  templateUrl: './new-candidate.page.html',
  styleUrls: ['./new-candidate.page.scss'],
})
export class NewCandidatePage implements OnInit {
public firstname:any;
public lastname:any;
public date:Date;
public id:any;
public phone:any;
public email:EmailValidator;
public password:any;
public profession: any = {
  header: 'profession',
  subHeader: 'מקצוע',
};

public isExperience:boolean;
public experienceInYears:Number;
public madeAnExam:boolean;
public examGrade:any;

<<<<<<< HEAD
  
    public firstName: string
    public lestName: string
    public strtProcess: Date;
    public idd: number
    public job: string
    public experience: any
    public testGraid: any;
    public phoone: number
    public emaiil: string
  
    public newC: object;
=======
    public name: string
    //public lestName: string
    public strtProcess: String;
    public id: string
    public job: string
    // public experience: any
    // public testGraid: any;
    public phone: number
    public email: string
    public lisens: string
>>>>>>> 3cad537984b88923f13c6737d1c2c9b36e4176af
    
    
  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
  }

  submitchange(){
    let candidate ={
      name: this.name,
      id: this.id,
      job: this.job,
      lisens: this.lisens,
      startdate: this.strtProcess,
      phone: this.phone,
      email: this.email
    }
    console.log(this.strtProcess)
   this.firebase.addNewCandidate(candidate)
   //window.location.reload();
  }

}
