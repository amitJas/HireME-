import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.page.html',
  styleUrls: ['./interview.page.scss'],
})
export class InterviewPage implements OnInit {

  public CandidateName:string;
  public interviewer:string;
  public date:Date;
  public discription:any;
  public pass:boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
