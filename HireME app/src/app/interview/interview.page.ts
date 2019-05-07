import { Component, OnInit } from '@angular/core';
import { StationService } from './../station-service/station.service';



@Component({
  selector: 'app-interview',
  templateUrl: './interview.page.html',
  styleUrls: ['./interview.page.scss'],
})
export class InterviewPage implements OnInit {

  public candidateName:string;
  public interviewer:string;
  public date:Date;
  public discription:any;
  public pass:boolean;
  
  constructor(private station: StationService ) {

   }

  ngOnInit() {
    this.candidateName = this.station.candidateName
    console.log(this.candidateName);
  }

}
