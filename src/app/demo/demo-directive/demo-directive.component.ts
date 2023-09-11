import { Component } from '@angular/core';
import { Tache } from 'src/app/shared/Models/tache';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.css']
})
export class DemoDirectiveComponent {

  tache1 : Tache = {
    id : 0,
    nom : 'Tache1',
    complet : false
  }
  tache2 : Tache = {
    id : 1,
    nom : 'Tache2',
    complet : false
  }
  tache3 : Tache = {
    id : 2,
    nom : 'Tache3',
    complet : false
  }
  tache4 : Tache = {
    id : 3,
    nom : 'Tache4',
    complet : false
  }

  taches : Tache[] = [this.tache1, this.tache2, this.tache3, this.tache4]


  changerEtat(id : number) : void{
  this.taches[id].complet = !this.taches[id].complet
  }
}
