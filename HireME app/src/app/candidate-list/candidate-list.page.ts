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
  public allCandidates: any//["עמית","נדב","נועם","ינאי"];
  public testProcess = ["54","80","66","10"];
  //public allCandidates = [];
  public candidateProgress: any;

  constructor(private firebase: FirebaseService, public router: Router) { 
    this.allCandidates = this.firebase.getAllCandidate();
    console.log("all names",this.allCandidates);
  }

  ngOnInit() {
    this.department = this.firebase.currUserDepartment;
  }

  goToCandidate(candidate){
    console.log(candidate)
    this.firebase.currCandidate = candidate.name;
    this.router.navigate(['candidate']);
  }

  goToNewCandidate(){
    this.router.navigate(['new-candidate']);
  }

 
 
 

}
