import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psifas-test',
  templateUrl: './psifas-test.page.html',
  styleUrls: ['./psifas-test.page.scss'],
})
export class PsifasTestPage implements OnInit {

  public CandidateName:string;
  public interviewer:string;
  public date:Date;
  public grade:DoubleRange;
  public discription:string;
  public pass:boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
