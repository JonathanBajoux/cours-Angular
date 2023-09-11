import { Component } from '@angular/core';
import { DemoBookService } from 'src/app/shared/services/demo-book.service';

@Component({
  selector: 'app-demo-service',
  templateUrl: './demo-service.component.html',
  styleUrls: ['./demo-service.component.css']
})
export class DemoServiceComponent {
  public books : string[] = [];

  newBook : string = " ";


  // Ici j'ajoute mon injection de dépendance
  constructor(private _bookService : DemoBookService){}

  ngOnInit(){
    // a l'instanciation du composant
    this.books = this._bookService.getBooks();
  }

  // ajout de livre
  addNewBook() : void {
    // Uitlisation du service pour ajouter un livre
    this._bookService.addBook(this.newBook);
  }

  // delete
  removeBook(index : number) : void {
    this._bookService.removeBook(index);
  }
}
