import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component {

  myString : string = "hello World !!!";
//------------------------------------------------
  myNumber : number = 42.22222222222;
//-------------------------------------------------
  myDate : Date = new Date;
//-------------------------------------------------
  myTemp: number = 16;
  myTempC : number = 16;
  myTempF : number = 32;
//-------------------------------------------------
  timer : any = undefined;
  start(): void{
    this.timer = setInterval(
      () => {
        console.log('Hello World !!!');
      }, 1000)
  }

  stop() : void{
    clearInterval(this.timer)
  }
//-------------------------------------------------
}
