import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======

>>>>>>> 371ccdaef3bfd69fa31d2ffe0b9f6abfa33d6b6a
import { FirebaseService } from '../firebase-service/firebase-service.service';

@Component({
  selector: 'app-new-candidate',
  templateUrl: './new-candidate.page.html',
  styleUrls: ['./new-candidate.page.scss'],
})
export class NewCandidatePage implements OnInit {
<<<<<<< HEAD
/*public firstname:any;
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
*/
=======

  
    public newC: object;
>>>>>>> 371ccdaef3bfd69fa31d2ffe0b9f6abfa33d6b6a
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
