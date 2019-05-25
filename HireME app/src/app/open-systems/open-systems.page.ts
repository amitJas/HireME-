import { StationService } from './../station-service/station.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-open-systems',
  templateUrl: './open-systems.page.html',
  styleUrls: ['./open-systems.page.scss'],
})
export class OpenSystemsPage implements OnInit {

  
  public radioArr = [ false,false,false,false,false,false,false,
                      false,false,false,false,false,false,false ]

  // public userArr = []
  constructor(public station:StationService) { }

  ngOnInit() {
    setTimeout(() => {
      this.initSystem()
    }, 500);
  }


  
  initSystem(){
    const NUM_OF_FORMS = 14
    let num = 0 , progress = 0
    let process = 'sf_' + (num + 1).toString()
    let user = null
  

    while(num < NUM_OF_FORMS ){
      process = 'sf_' + (num + 1).toString()
      user = 'setSf_' +  (num + 1).toString()

      console.log(process,user)
      if(this.station.station[process]){
        this.radioArr[num]  = true
        //this.userArr[num] = this.station.station[process].how
        progress++
      }
      num++
    }
    this.station.calculateStationProgress(progress)
  }

  setRdiuoForms(rdiuoName){
    let d = new Date().getTime()
    this.station.setRdiuo(rdiuoName,d)
  }

}
