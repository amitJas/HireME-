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
  private addForm = false;
  private newForm :String;

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
    if(this.station.station.sendDate){
      this.sendDate = this.station.station.sendDate;
    }
    if(this.station.station.returnDate){
      this.returnDate = this.station.station.returnDate;
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
  }

  setRdiuoForms(rdiuoName){
    console.log(rdiuoName)
  }
  
}
