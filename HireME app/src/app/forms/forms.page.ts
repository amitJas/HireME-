import { Component, OnInit } from '@angular/core';
import { StationService } from './../station-service/station.service';





@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {

  public userNameSend: any;
  public userNameReturn: any;
  public sendDate: any
  public returnDate: any;
  public sendShow = false;
  private send = false;
  private return = false;
  private addForm = false ; newForm = String;
  private f101 = false; 
  private f102 = false; 
  private f103 = false; 
  private f104 = false;
  private set101 = String; set102 = String; set103 = String; set104 = String;
  


  constructor(private station: StationService ) { }

  ngOnInit() {
    setTimeout( () =>{
      console.log('this.station', this.station.station)
      this.initData()
    },500)
    //console.log('this.station', this.station.station)
    // this.station.getSatationData('חובקן טפסים').subscribe(ste =>{
    //   this.initData(ste)
    // })
  }

  initData()
  {
    console.log("initData")
    if(this.station.station.sendDate){ 
      this.sendDate = this.station.station.sendDate.data;
      this.userNameSend = this.station.station.sendDate.how;
    }
    if(this.station.station.returnDate){
      this.returnDate = this.station.station.returnDate.data;
      this.userNameReturn = this.station.station.returnDate.how;
    }
    if(this.station.station.f101){ 
      this.set101 = this.station.station.f101.how;
      this.f101 = true; 
      console.log("-----------",this.set101)
    }
    if(this.station.station.f102){ 
      this.set102 = this.station.station.f102.how;
      this.f102 = true; 
    }
    if(this.station.station.f103){ 
      this.set103 = this.station.station.f103.how;
      this.f103 = true; 
    }
    if(this.station.station.f104){ 
      this.set104 = this.station.station.f104.how;
      this.f104 = true; 
    }
  }
  // setData(sendDate){
  //   console.log("in setData",sendDate)
  //   if(this.station.station.sendTime){

  //   }
   
  // } 
  moreForms(){
    //console.log(rdiuoName)
    this.addForm = true;
  }

  addFrom(){
    // let newDiv = document.createElement('<ion-item> <ion-label>' + this.newForm + '</ion-label></ion-item>'); 
    // var currentDiv = document.getElementById("div1"); 
    // document.body.insertBefore(newDiv); 
    // const element = document.createElement('div');
    // element.innerHTML = '<ion-item> <ion-label>' + this.newForm + '</ion-label></ion-item>'
    var temp = document.createElement("temp");
    var list = document.getElementById("formList");
      temp.innerHTML = "<ion-item> \
          <ion-label>" + this.newForm + "</ion-label>\
          <ion-radio [checked]='f104' slot='start' value='biff'  (ionFocus)='setRdiuoForms('f104')' ></ion-radio>\
          </ion-item>"
          list.appendChild(temp);
    
  }

  setDate(date,bool){
    if(bool)
      this.station.setFile('sendDate',date) 
    if(!bool)
      this.station.setFile('returnDate',date)
  }

  setRdiuoForms(rdiuoName){
    let d = new Date().getTime()
    console.log(rdiuoName,d) // 
    //console.log(rdiuoName,Date.setDate(d))
    this.station.setFile(rdiuoName,new Date().getTime())
    //this.station.setFile(rdiuoName,getLocaleDateFormat)
  }
  
}
