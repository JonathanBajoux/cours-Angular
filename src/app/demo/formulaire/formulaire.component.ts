import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/Models/product';
import { ProductServiceService } from 'src/app/shared/services/product-service.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {

  ajoutForm! : FormGroup;

 constructor(
  private _nomformbuilder : FormBuilder,
  private _nomProductService : ProductServiceService
 ){}

 ngOnInit(): void {
  console.log("start du component formulaire")
  this.ajoutForm = this._nomformbuilder.group({
    nom : ['', Validators.required],
    description : ['', Validators.required],
    prix : [, Validators.required],
  })
}
submitForm() : void {
  const form = this.ajoutForm.value
  const newProduct : Product = {
    id : 0,
    nom : form['nom'],
    description : form['description'],
    prix : form['prix']
  }

  this._nomProductService.ajoutProduit(newProduct)
 }
};
