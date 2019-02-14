import { Component, OnInit } from '@angular/core';
import { NavController , NavParams } from '@ionic/angular';
import { FirebaseService } from '../firebase-service/firebase-service.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.page.html',
  styleUrls: ['./candidate.page.scss'],
})
export class CandidatePage implements OnInit {

  public department:any ;
  constructor( public params: NavParams,public firebase: FirebaseService) { 
    this.department = this.firebase.currDepartment;
  }

  ngOnInit() {
  }

}
