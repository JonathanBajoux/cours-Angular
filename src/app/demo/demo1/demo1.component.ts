import { Component} from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component {
 /*
  dans une class : je peux avoir exclusivement des déclarations (de variable ou de méthode)
  mais pas de code fonctionnel

  le code fonctionnel devra se trouver dans des méthodes
  */
  monNom : string = "Jonathan"
  monAge : number = 36;
  maDateNaissance : Date = new Date (1987, 4, 12);
  marier : boolean = false;

  monTableau : number[] = [ 4 , 9 , 31 , 36 ];

  changerNom(nom : string) {
    this.monNom = nom;
  }
}



