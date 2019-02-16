import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase-service/firebase-service.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.page.html',
  styleUrls: ['./candidate-list.page.scss'],
})
export class CandidateListPage implements OnInit {

  public department:any
  public allCandidates = ["עמית","נדב","נועם","ינאי"];

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {

    this.department = this.firebase.currUserDepartment;
   
  }

  goToCandidate(){
    
  }
}
