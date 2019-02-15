import { Injectable } from '@angular/core';
import { FirebaseService } from './../firebase-service/firebase-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  public stationName: string;
  public openStationDate: Date;
  public stationList = ["interview-station","psifas-station"];

  constructor(private router: Router) {

  }


  stationRouting(stationIndex){
    this.router.navigate([this.stationList[stationIndex]]);
  }


}
