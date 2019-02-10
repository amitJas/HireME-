import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'; 



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public candidateIndex;
  public candidateTest = ["עמית","ינאי","נועם","נדב"]
  constructor(private nav:NavController,private router: Router) { }

  ngOnInit() {
    //this.redirectToRegister();
  }



  getData(){
    console.log(this.candidateIndex);
  }
}
