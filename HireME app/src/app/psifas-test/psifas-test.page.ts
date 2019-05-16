import { StationService } from './../station-service/station.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-psifas-test',
  templateUrl: './psifas-test.page.html',
  styleUrls: ['./psifas-test.page.scss'],
})
export class PsifasTestPage implements OnInit {

  public candidateName:string;
  public interviewer:string;
  public testDate:Date;
  public grade:DoubleRange;
  public discription:string;
  public pass:boolean;
  public candidate = null
  
  constructor(private station: StationService) { }

  ngOnInit() {
    this.candidate = this.station.candidate;
    console.log(this.candidate )
  }

}
