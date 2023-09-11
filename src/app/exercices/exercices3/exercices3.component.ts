import { Component } from '@angular/core';
import { ArticleList } from 'src/app/shared/Models/article-list';

@Component({
  selector: 'app-exercices3',
  templateUrl: './exercices3.component.html',
  styleUrls: ['./exercices3.component.css']
})
export class Exercices3Component {


  articles : ArticleList[] = [
  {
    titre : 'Jeux video',
    description : 'Déscription',
    estPublie : true
  },
  {
    titre : 'Course auto/moto/vélo',
    description : 'Déscription',
    estPublie : false
  },
  {
    titre : 'Le monde',
    description : 'Déscription',
    estPublie : true
  },
  {
    titre : 'Decouverte',
    description : 'Déscription',
    estPublie : false
  }
]

  articlesPublie = true;


  basculeAffichage() : void{
    this.articlesPublie = !this.articlesPublie;
  }
}
