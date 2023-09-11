import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/Models/product';
import { ProductServiceService } from 'src/app/shared/services/product-service.service';

@Component({
  selector: 'app-updated-formproduct',
  templateUrl: './updated-formproduct.component.html',
  styleUrls: ['./updated-formproduct.component.css']
})
export class UpdatedFormproductComponent {

  // Id à récuperer  = (-1 par défault)
  idARecup : number = -1;

  //produit à récuperer
  produitToUpdate! : Product;

  //message d'erreur
  messageErreur! : string;

  // déclaration du formGroup
  updateForm! : FormGroup;

  // injection des services nécéssaires
  constructor(
    private _nomFormBuilder : FormBuilder,
    private _nomProductService : ProductServiceService
  ){
    this.produitToUpdate = {
      id : -1,
      nom : '',
      description : '',
      prix : 0
    }

  }

  ngOnInit(): void {
    //recuperation de tout les inputs via les formControlName
    this.updateForm = this._nomFormBuilder.group({
      nom : ['', [Validators.required]],
      description : ['', [Validators.required]],
      prix : ['', [Validators.required]],
    })
  }

 recupererProduit() : void {
  //console.log(`l'id est => {this.idARecup}`);
  const nombreProduit = this._nomProductService.getProduits().length
  if (this.idARecup == -1 || this.idARecup > nombreProduit){
      this.messageErreur = "Id introuvable...";
  }
  else{
    // sinom ont récupères les informations
    this.produitToUpdate = this._nomProductService.getProduit(this.idARecup)
    this.messageErreur = ''


  }
 }
 soumettreFormulaire() : void {
  const form = this.updateForm.value
  // this.produitToUpdate.nom = form['nom'];
  // this.produitToUpdate.description= form['description'];
  // this.produitToUpdate.prix = form.prix;
  // this._nomProductService.updateProduit(this.produitToUpdate);

  //vérifier le service vers l'information
  const newUpdateProduct : Product = {
    id : this.produitToUpdate.id,
    nom : form['nom'],
    description : form['description'],
    prix : form['prix']
  }
 }
}
