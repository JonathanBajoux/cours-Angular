import { Injectable } from '@angular/core';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private _products : Product[] = [];

  constructor() { }

  //c => create
  ajoutProduit(newProduit : Product){
    this._products.push(newProduit)
  }

  //R => Read
  getProduits() : Product[] {
    return this._products;
  }

  //R => ReadOne
  getProduit(id :number) : Product{
    return this._products[id]
  }

  //U => Update
  updateProduit(updatedProduit : Product){
    const index = this._products.findIndex((produit) => produit.id === updatedProduit.id)
    if (index >= 0){
      this._products[index] = updatedProduit;
    }
  };

  //D => Delete
  deleteProduit(id : number){
    const index = this._products.findIndex((product) => product.id === id)
    if (index >= 0){
      this._products.splice(index, 1)
    }
  }
}
