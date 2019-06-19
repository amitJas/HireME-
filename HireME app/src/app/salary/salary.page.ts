import { StationService } from './../station-service/station.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-salary',
  templateUrl: './salary.page.html',
  styleUrls: ['./salary.page.scss'],
})
export class SalaryPage implements OnInit {

  public hrSendDate:any
  public hrReturnDate: any
  public userHrReturn: any
  public userHrSend
  public setCertificate = false; setCv = false; setSeniority = false; setArmy = false
  public name: any
  public candidateSendDate: any
  public userCanddiateSend: any
  public candidateReturnDate: any
  public userCanddiateReturn: any
  public candidateName: any
  public answer = false

  constructor(public station:StationService) { }

  ngOnInit() {

    this.candidateName = this.station.candidateName
    setTimeout( () =>{
      this.initSalary()
    },500)
  }


  initSalary(){
    let corrStation = this.station.station;
    let progress = 0

    if(corrStation.hrSendDate){
      this.hrSendDate = corrStation.hrSendDate.data
      this.userHrSend = corrStation.hrSendDate.how
      progress++
    }
    if(this.station.station.hrReturnDate){
      this.hrReturnDate = corrStation.hrReturnDate.data
      this.userHrReturn = corrStation.hrReturnDate.how
      progress++
    }
    if(this.station.station.hrReturnDate){
      this.candidateSendDate = corrStation.candidateSendDate.data
      this.userCanddiateSend = corrStation.candidateSendDate.how
      progress++
    }
    if(this.station.station.hrReturnDate){
      this.candidateReturnDate = corrStation.candidateReturnDate.data
      this.userCanddiateReturn = corrStation.candidateReturnDate.how
      progress++
    }
    //radio button 
    corrStation.certificate ? (this.setCertificate = true ,progress++  ): this.setCertificate = false
    corrStation.cv ? (this.setCv = true , progress++ ) : this.setCv = false
    corrStation.seniority ? (this.setSeniority = true , progress++ ) : this.setSeniority = false
    corrStation.army ? (this.setArmy = true , progress++ ): this.setArmy = false
    corrStation.answer ? (this.answer = true , progress++ ): this.answer = false

    this.station.calculateStationProgress(progress)
  }


  saveSalary(data, num){
    console.log('saveSalary',num)
    if(num == 1)
        this.station.setFile('hrSendDate',data)
    if(num == 2 )
      this.station.setFile('hrReturnDate',data)
    if(num == 3 )
      this.station.setFile('candidateSendDate',data)
    if(num == 4 )
      this.station.setFile('candidateReturnDate',data)
    num == 5 ? this.station.setFile('answer',true) : null
  }


  setRdiuoForms(rdiuoName){
    //console.log('setRdiuoForms',rdiuoName)
    let d = new Date().getTime()
    this.station.setRdiuo(rdiuoName,d)
  }




}
