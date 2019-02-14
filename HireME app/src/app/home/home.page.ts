import { FirebaseService } from './../firebase-service/firebase-service.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public departmentIndex: any;
  public departmentArr = ["אדמינסטרציה","קלינאות תקשורת","ריפוי בעיסוק","פיזוטרפיה","רפואה","פסיכולוגיה","עבודה סוציאלית"]
  
  constructor(private router: Router, private firebase:FirebaseService, public nav: NavController) { }

  ngOnInit() {
    //this.redirectToRegister();
  }

 

  moveToDepartmentCandidate(department){
    this.firebase.currUserDepartment = department;
    this.departmentIndex = department;
    console.log(department);
    this.router.navigate(['candidate']);
  }
}
