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
  public test:any
  public grade: any;
  public userSetTest:string;
  public userSetGrade:string;
  public pass:boolean;
  public candidate = null
  
  constructor(public station: StationService) { }

  ngOnInit() {
    this.candidate = this.station.candidate;
    setTimeout( () =>{
      this.initPsifas()
    },500)
  }

  initPsifas(){
    let pro = 0
    if(this.station.station.test){
      this.test = this.station.station.test.data
      this.userSetTest = this.station.station.test.how
      pro++
    }
    if(this.station.station.grade){
      this.grade = this.station.station.grade.data
      this.userSetGrade = this.station.station.grade.how
      pro++
    }
    this.station.calculateStationProgress(pro)
  }

  savePsifas(data, num){
    console.log(data, num)
    if(num == 1)
      this.station.setFile('test',data)
    if(num == 2 )
      this.station.setFile('grade',data)

  }
}
