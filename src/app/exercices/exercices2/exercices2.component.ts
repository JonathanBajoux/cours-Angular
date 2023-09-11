import { Component } from '@angular/core';

@Component({
  selector: 'app-exercices2',
  templateUrl: './exercices2.component.html',
  styleUrls: ['./exercices2.component.css']
})
export class Exercices2Component {
    totalSeconds : number = 0;
    timer : any = undefined;
    isActive : boolean = false;

    start() : void{
      this.timer = setInterval(
        () => {
          this.totalSeconds++;
        },1000)
    }

    pause(): void{
      clearInterval(this.timer);
      this.timer = undefined;
    }

    reset() : void{
      this.totalSeconds = 0;
      this.pause();
    }

    toggle(): void{
      if(!this.isActive){
        this.start();
      }else{
        this.pause();
      }
      this.isActive = !this.isActive;
    }
}
