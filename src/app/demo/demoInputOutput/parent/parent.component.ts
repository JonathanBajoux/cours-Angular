import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  message : string ="Message du composant parent ver le composant enfant"

  messageRecu: string = "";

  envoiMessage(message : string) : void{
    this.messageRecu = message;
  }
}
