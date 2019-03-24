import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase-service/firebase-service.service';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private firebase: FirebaseService) { }
}
