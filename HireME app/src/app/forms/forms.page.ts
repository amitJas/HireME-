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

  public radioArr = [ false,false,false,false,false,false,false,
                      false,false,false,false,false,false,false ]

  // private setf_1 = String; setf_2 = String; setf_3 = String; setf_4 = String; setf_5 = String; setf_6 = String; setf_7 = String;
  // private setf_8 = String; setf_9 = String; setf_10 = String; setf_11 = String; setf_12 = String; setf_13 = String; setf_14 = String;

  private user :any; 
  private form:any;
  private forms = 14


  constructor(private station: StationService ) { }

  ngOnInit() {
    setTimeout( () =>{
      console.log('this.station', this.station.station)
      this.initData()
    },500)
  }

  initData(){
    let formNum = 0
    let progress = 0
    const NUM_OF_FORMS = 15

    if(this.station.station.sendDate){ 
      this.sendDate = this.station.station.sendDate.data;
      this.userNameSend = this.station.station.sendDate.how;
      progress++
    }
    if(this.station.station.returnDate){
      this.returnDate = this.station.station.returnDate.data;
      this.userNameReturn = this.station.station.returnDate.how;
      progress++
    }

    while(formNum < NUM_OF_FORMS ){ // checks all the radio baten

      this.form = 'f_' + (formNum + 1).toString()
      //this.user = 'setf_' +  formNum.toString() 

      if(this.station.station[this.form]){
        this.radioArr[formNum]  = true
        progress++
      }
      formNum++
    }
    this.station.calculateStationProgress(progress)
  }

  moreForms(){
    //console.log(rdiuoName)
    this.addForm = true;
  }

  addFrom(){
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
    this.station.setRdiuo(rdiuoName,d)
  }
  
}
