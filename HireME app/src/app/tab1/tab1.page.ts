import { Component } from '@angular/core';
import { FirebaseService } from '../firebase-service/firebase-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public firebase: FirebaseService) {}

  ngOnInit() {
    //this.firebase.setUserData()
  }

}
