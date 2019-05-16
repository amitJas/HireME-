import { NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-popdata',
  templateUrl: './popdata.page.html',
  styleUrls: ['./popdata.page.scss'],
})
export class PopdataPage implements OnInit {

  public candidatData = null ;
  constructor(private NavParams: NavParams) { }

  ngOnInit() {
    this.candidatData = this.NavParams.get('candidate')
  }

}
