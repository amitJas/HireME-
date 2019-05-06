import { Component, OnInit } from '@angular/core';
import { StationService } from './../station-service/station.service';
import { getLocaleDateFormat } from '@angular/common';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {

  public userNameSend: any;
  public userNameReturn: any;
  public sendDate: any
  public returnDate: any;
  public sendShow = false;
  private send = false;
  private return = false;
  private addForm = false;
  private f101 = false;

  constructor(private station: StationService ) { }

  ngOnInit() {
    setTimeout( () =>{
      console.log('this.station', this.station.station)
      this.initData()
    },500)
    //console.log('this.station', this.station.station)
    // this.station.getSatationData('חובקן טפסים').subscribe(ste =>{
    //   this.initData(ste)
    // })
  }

  initData()
  {
    console.log("initData")
    if(this.station.station.sendDate){ 
      this.sendDate = this.station.station.sendDate.data;
      this.userNameSend = this.station.station.sendDate.how;
      this.send = true
    }
    if(this.station.station.returnDate){
      this.returnDate = this.station.station.returnDate.data;
      this.userNameReturn = this.station.station.returnDate.how;
      this.return = true
    }
    
   
  }
  // setData(sendDate){
  //   console.log("in setData",sendDate)
  //   if(this.station.station.sendTime){

  //   }
   
  // } 
  moreForms(){
    //console.log(rdiuoName)
    this.addForm = true;
  }

  addFrom(){
   
  }
  
  setDate(date,bool){
    if(bool)
      this.station.setFile('sendDate',date) 
    if(!bool)
      this.station.setFile('returnDate',date)

      //this.userName = this.station.currUser;
  }

  setRdiuoForms(rdiuoName){
    let d = new Date().getTime()
    console.log(rdiuoName,d) // 
    //console.log(rdiuoName,Date.setDate(d))
    this.station.setFile(rdiuoName,new Date().getTime())
    //this.station.setFile(rdiuoName,getLocaleDateFormat)
  }
  
}
