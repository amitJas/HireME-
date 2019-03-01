import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

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

  
    public firstName: string
    public lestName: string
    public strtProcess: Date;
    public id: number
    public job: string
    public experience: any
    public testGraid: any;
    public phone: number
    public email: string
  
    public newC: object;
    
  constructor() { }

  ngOnInit() {
  }

  submitchange(){
    
   
  }

}
