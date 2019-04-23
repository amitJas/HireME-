import { Component, OnInit } from '@angular/core';
import { StationService } from './../station-service/station.service';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {

  public sendDate: any;
  public returnDate: any;
  public sendShow = false;
  
  

  constructor(private station: StationService ) { }

  ngOnInit() {
 
  }

  
  // setData(sendDate){
  //   console.log("in setData",sendDate)
  //   if(this.station.station.sendTime){

  //   }
   
  // } 
  
  setDate(date,num){
    if(num)
      console.log('send time',date)
    if(!num)
      console.log('return time',date)
  }
  
}
