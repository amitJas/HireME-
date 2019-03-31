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
    public strtProcess: Date;
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
    let candidate ={
      
    }
   this.firebase.addCandidate(candidate)
  }

}
