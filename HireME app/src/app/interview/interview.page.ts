import { Component, OnInit } from '@angular/core';
import { StationService } from './../station-service/station.service';



@Component({
  selector: 'app-interview',
  templateUrl: './interview.page.html',
  styleUrls: ['./interview.page.scss'],
})
export class InterviewPage implements OnInit {

  public progressCount = 0;
  public candidateName:string;
  public interviewer:string;
  public date:any;
  //public discription:any;
  //public pass:boolean;
  public interviewerName = String
  public userSetInterviewer = String
  
  constructor(private station: StationService ) {

   }

  ngOnInit() {
    this.candidateName = this.station.candidateName
    console.log(this.candidateName);
  }

  initInterview(){
    if(this.station.station.interviewer){
      this.interviewerName = this.station.station.interviewer
      this.userSetInterviewer = this.station.station.interviewer.how;
      this.progressCount++
    }
    if(this.station.station.interviewDate){
      this.interviewerName = this.station.station.interviewDate
      this.userSetInterviewer = this.station.station.interviewDate.how;
      this.progressCount++
    } 
  }

  setData(data,num){
    if(num == 1)
      this.station.setFile('interviewer',data) 
    if(num == 2)
      this.station.setFile('interviewDate',data)
  }

}
