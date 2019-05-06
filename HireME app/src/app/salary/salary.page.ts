import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.page.html',
  styleUrls: ['./salary.page.scss'],
})
export class SalaryPage implements OnInit {

  public CandidateName : string ; 
  public allfilesaccepted=false;
  public date1:Date;
  public date2:Date;
  public date3:Date;
  public date4:Date;
  public answer:boolean;

  constructor() { }

  ngOnInit() {
  }

}
