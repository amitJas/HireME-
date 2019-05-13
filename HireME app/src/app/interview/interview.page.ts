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
  public date:any ; userSetDate:any;
  public discription:String ; discriptionSets: any;
  //public pass:boolean;
  public interviewerName:any
  public userSetInterviewer = String
  public interviewDate:any
  public message: any
  public discriptionSet = false; saveButton:String 
  public job = 0 ; 
  //public rdiuo = []

  constructor(private station: StationService ) {

   }

  ngOnInit() {
    this.candidateName = this.station.candidateName
    console.log(this.candidateName);
    setTimeout( () =>{
      console.log('this.station', this.station.station)
      this.initInterview()
    },500)
  }

  initInterview(){
    if(this.station.station.interviewer){
      this.interviewerName = this.station.station.interviewer.data
      this.userSetInterviewer = this.station.station.interviewer.how;
      this.progressCount++
    }
    if(this.station.station.interviewDate){
      this.date = this.station.station.interviewDate.data
      this.userSetDate = this.station.station.interviewDate.how;
      this.progressCount++
    }
    if(this.station.station.discription){
      this.discriptionSet = !this.discriptionSet
      this.saveButton = 'ערוך'
      this.discription = this.station.station.discription.data
      this.discriptionSets = this.station.station.discription.how;
      this.progressCount++
    }
    this.job = this.station.station.job;
  }

  setData(data,num){
    console.log('in set data' , data, num)
    if(num == 1)
      this.station.setFile('interviewer',data) 
    if(num == 2)
      this.station.setFile('interviewDate',data)
    if(num == 3){
      if(this.discriptionSet){
        this.discriptionSet = !this.discriptionSet
        this.saveButton = 'שומר'
      }else if(!this.discriptionSet){
        this.discriptionSet = !this.discriptionSet
        this.saveButton = 'ערוך'
      }
      this.station.setFile('discription',data)
    }
      
  }

  setRdiuoInterview(rdiuoName,num){
    this.station.setRdiuo(rdiuoName,num)
  }

}
