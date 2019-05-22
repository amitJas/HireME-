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

  private f_1 = false; f_2 = false; f_3 = false; f_4= false ;f_5 = false ; f_6 = false; f_7 = false
  private f_8 = false; f_9 = false; f_10 = false; f_11= false ;f_12 = false ; f_13 = false; f_14 = false

  private setf_1 = String; setf_2 = String; setf_3 = String; setf_4 = String; setf_5 = String; setf_6 = String; setf_7 = String;
  private setf_8 = String; setf_9 = String; setf_10 = String; setf_11 = String; setf_12 = String; setf_13 = String; setf_14 = String;

  private user :any; 
  private form:any;
  private forms = 14


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
    // console.log("initData")
    // let formNum = 1
    // this.form = 'f_' + formNum.toString()
    // this.user = 'setf_' +  formNum.toString() 
    // var temp = document.createElement("temp");
    // var list = document.getElementById("formList");

    // for(let i  of this.forms ){
    //   console.log("form, user ",this.form,this.user)
    //   temp.innerHTML = "<ion-item> \
    //       <ion-label text-right>" + this.forms[formNum - 1] + "</ion-label> \
    //       <ion-checkbox mode='ios' [checked]= \" "+ this.form + "\"\ \"slot= \"start\"\ value='biff' (ionFocus)='setRdiuoForms(" + this.form + ")></ion-checkbox> \
    //       <ion-note *ngIf= " + this.form  + " text-right class='userUp' >עודכן עי: {{ " +  this.user   +" }}  </ion-note></ion-item>"
    //       list.appendChild(temp.cloneNode(true));

    //       this.form = 'f_' + formNum.toString()
    //       this.user = 'setf_' +  formNum.toString() 
    //       formNum++

    // }

    
    let formNum = 1
    this.form = 'f_' + formNum.toString()
    this.user = 'setf_' +  formNum.toString() 
    
    if(this.station.station.sendDate){ 
      this.sendDate = this.station.station.sendDate.data;
      this.userNameSend = this.station.station.sendDate.how;
    }
    if(this.station.station.returnDate){
      this.returnDate = this.station.station.returnDate.data;
      this.userNameReturn = this.station.station.returnDate.how;
    }
    while(formNum < 15 ){

      console.log("initData")
      this.form = 'f_' + formNum.toString()
      this.user = 'setf_' +  formNum.toString() 

      console.log( this.form,this.user)
      if(this.station.station[this.form]){ 
        this[this.user] = this.station.station[this.form].how;
        this[this.form] = true; 
      }
      console.log("initData",[this.user],  this.station.station[this.form].how ,this.form)
      formNum++

    }
    // if(this.station.station.f_2){ 
    //   this.setf_2 = this.station.station.f_2.how;
    //   this.f_2 = true; 
    // }
    // if(this.station.station.f_3){ 
    //   this.setf_3 = this.station.station.f_3.how;
    //   this.f_3 = true; 
    // }
    // if(this.station.station.){ 
    //   this.setf_4 = this.station.station.f_4.how;
    //   this.f_4 = true; 
    // }
   
  
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
    console.log('setRdiuoForms',rdiuoName)
    let d = new Date().getTime()
    this.station.setRdiuo(rdiuoName,d)
  }
  
}
