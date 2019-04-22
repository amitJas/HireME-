import { Component, OnInit } from '@angular/core';
import { StationService } from './../station-service/station.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {

  constructor(private station: StationService ) { }

  ngOnInit() {
    this.station.currStation = 'טפסים';
    this.station.printBLA();
  }


  
}
