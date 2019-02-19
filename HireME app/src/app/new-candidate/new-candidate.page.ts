import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-candidate',
  templateUrl: './new-candidate.page.html',
  styleUrls: ['./new-candidate.page.scss'],
})
export class NewCandidatePage implements OnInit {

  
    public firstName: string
    public lestName: string
    public strtProcess: Date;
    public id: number
    public job: string
    public experience: any
    public testGraid: any;
    public phone: number
    public email: string
  
    public newC: object;
    
  constructor() { }

  ngOnInit() {
  }

  submitchange(){
    
   
  }

}
