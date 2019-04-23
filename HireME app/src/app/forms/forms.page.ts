import { Component, OnInit } from '@angular/core';
import { StationService } from './../station-service/station.service';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {

  public sendDate: any;
  public sendShow = false;
  public data: any;
  public test = '1/1/222'

  constructor(private station: StationService ) { }

  ngOnInit() {
    this.station.stationName = 'טפסים';
    this.station.getSatationData()
    this.data = this.station.station
    //setTimeout(() => {  console.log(  this.station.station,"in forms");
    //this.getSendDate() }, 500);
    //this.getSendDate()
  }

  
  // getSendDate(){
  //   if(this.station.station.id){
  //     this.sendDate = this.test
  //     this.sendShow = true
  //   }
  //  return this.sendDate
   
   
  
  
}
