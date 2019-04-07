import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase-service/firebase-service.service';

@Component({
  selector: 'app-new-candidate',
  templateUrl: './new-candidate.page.html',
  styleUrls: ['./new-candidate.page.scss'],
})
export class NewCandidatePage implements OnInit {

    public firstName: string
    public lestName: string
    public strtProcess: any;
    public id: string
    public job: string
    // public experience: any
    // public testGraid: any;
    public phone: number
    public email: string
  
    
    
  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
  }

  submitchange(){
    console.log(this.firstName)
    let candidate ={
      firstname: this.firstName,
      lestname: this.lestName,
      id: this.id,
      job: this.job,
      startdate: this.strtProcess,
      phone: this.phone,
      email: this.email
    }
    console.log(candidate)
   this.firebase.addCandidate(candidate)
  }

}
