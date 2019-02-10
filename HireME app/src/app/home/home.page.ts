import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'; 



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public userTest = ["amit","nadav","yanai"]
  constructor(private nav:NavController,private router: Router) { }

  ngOnInit() {
    //this.redirectToRegister();
  }



  redirectToRegister(){
    this.router.navigate(['candidate-card']);
   }
}
