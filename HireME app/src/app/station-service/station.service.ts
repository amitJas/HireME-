import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase-service/firebase-service.service';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  public currUser: any;
  public currCandidate: any;

  constructor(private firebase: FirebaseService) {
    this.currCandidate = this.firebase.currCandidate
   }
}
