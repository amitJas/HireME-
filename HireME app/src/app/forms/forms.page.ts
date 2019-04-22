import { Component, OnInit } from '@angular/core';
import { StationService } from './../station-service/station.service';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {

  public sendDate: any;
  public data: any;
  public test = '1/1/222'
  constructor(private station: StationService ) { }

  ngOnInit() {
    this.station.currStation = 'טפסים';
    this.station.getSatationData()
    this.data = this.station.currStationData
    // setTimeout(() => {  console.log( this.data); }, 3000);
   
  }
  
  // addFilde(){
  //   this.data.subscribe(arg => {

  //   });
    
  // }
  
  
}
