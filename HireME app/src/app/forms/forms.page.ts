import { Component, OnInit } from '@angular/core';
import { StationService } from './../station-service/station.service';
import { initDomAdapter } from '@angular/platform-browser/src/browser';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {

  public sendDate: any;
  public returnDate: any;
  public sendShow = false;
  private fixdData = true;
  

  constructor(private station: StationService ) { }

  ngOnInit() {
    setTimeout( () =>{
      console.log('this.station', this.station.station)
      this.initData()
    },500)
    
    

    
  }

  initData()
  {
    console.log('in initform' ,this.station.station.sendDate )
    if(this.station.station.sendDate){
      //this.fixdData = true;
      this.sendDate = this.station.station.sendDate;
    }
    if(this.station.station.returnDate){
      //this.fixdData = true;
      this.returnDate = this.station.station.returnDate;
    }
    
  }
  // setData(sendDate){
  //   console.log("in setData",sendDate)
  //   if(this.station.station.sendTime){

  //   }
   
  // } 
  
  setDate(date,bool){
    if(bool){
      console.log('send time set',date)
      this.station.setFile('sendDate',date)
    }
      
    if(!bool)
      console.log('return time',date)
      this.station.setFile('returnDate',date)
  }
  
}
