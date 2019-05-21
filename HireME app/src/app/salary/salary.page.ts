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

  constructor(private station:StationService) { }

  ngOnInit() {
  }


  initSalary(){

    //if(this.station.station.)
  }


  saveSalary(data, num){
    if(num == 1)
    {
      setTimeout(() => {
        this.station.setFile('hrSendDate',data)
      }, 500);
    }
      
    if(num == 2 )
    
      this.station.setFile('hrReturnDate',data)
    // if(num == 3 )
    //   this.station.setFile('cv',data)
    // if(num == 4 )
    //   this.station.setFile('cv',data)
    
  }


  setRdiuoForms(rdiuoName){
    console.log('setRdiuoForms',rdiuoName)
    let d = new Date().getTime()
    this.station.setRdiuo(rdiuoName,d)
  }




}
