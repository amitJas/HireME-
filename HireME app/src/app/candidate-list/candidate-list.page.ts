import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase-service/firebase-service.service';


@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.page.html',
  styleUrls: ['./candidate-list.page.scss'],
})
export class CandidateListPage implements OnInit {

  public department:any
  //public allCandidates = ["עמית","נדב","נועם","ינאי"];
  public allCandidates:any;
  public candidateProgress: any;

  constructor(private firebase: FirebaseService, public router: Router) { }

  ngOnInit() {
    this.department = this.firebase.currUserDepartment;
    this.allCandidates = this.firebase.getAllCandidates();
    //console.log(this.allCandidates)
    console.log("after allCandidates")
    console.log(this.allCandidates)
  }

  goToCandidate(candidate){
    this.firebase.currCandidate = candidate;
    this.router.navigate(['candidate']);
  }

  goToNewCandidate(){
    this.router.navigate(['new-candidate']);
  }

 
 

}
