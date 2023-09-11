import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercices1',
  templateUrl: './exercices1.component.html',
  styleUrls: ['./exercices1.component.css']
})

// OnInit : Un crochet de cycle de vie qui est appelé après qu'Angular ait initialisé toutes les propriétés liées aux données d'une directive. Définissez une méthode ngOnInit() pour gérer toute tâche d'initialisation supplémentaire.
export class Exercices1Component implements OnInit{

  myNumber! : number
  ngOnInit(): void {
    this.myNumber = 0;
  }
  addOne() : void{
    this.myNumber += 1;
  }
  withdrawOne() : void{
    this.myNumber -= 1;
  }
//---------------------------------------------------


}
