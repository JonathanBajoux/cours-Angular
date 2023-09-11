import { Component } from '@angular/core';
import { Product } from 'src/app/shared/Models/product';
import { ProductServiceService } from 'src/app/shared/services/product-service.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent {

  newProductName : string = '';
  newProductDescription : string = '';
  newProductPrice : number = 0;

  updatedNewProductName : string = '';
  updatedNewProductDescription : string = '';
  updatedNewProductPrice : number = 0;
  selectProductId : number | null = null;

  showUpdateForm : boolean = false;

  constructor(public productService : ProductServiceService){}

  deleteProduct(id : number) : void{
    this.productService.deleteProduit(id)
  }

  addProduct(){
    const newProduct : Product = {
      id : this.getNextProductId(),
      nom : this.newProductName,
      description : this.newProductDescription,
      prix : this.newProductPrice,
    }
    this.productService.ajoutProduit(newProduct);
    this.resetForm();
  }

  resetForm() : void {
    this.newProductName= '',
    this.newProductDescription= '',
    this.newProductPrice= 0
  }

  resetUpdateForm() : void {
    this.updatedNewProductName= '';
    this.updatedNewProductDescription= '';
    this.updatedNewProductPrice= 0;
  }

  edithProduct(updatedProduct: Product) : void{
    this.selectProductId = updatedProduct.id
    this.updatedNewProductName = updatedProduct.nom
    this.updatedNewProductDescription = updatedProduct.description
    this.updatedNewProductPrice = updatedProduct.prix
  }

  //update
  updateProduct(): void {
    if (this.selectProductId !== null) {
      const updatedProduct : Product = {
        id : this.selectProductId,
        nom : this.updatedNewProductName,
        description : this.updatedNewProductDescription,
        prix : this.updatedNewProductPrice
      }
      this.productService.updateProduit(updatedProduct);
    }
  }

  //get NextId
  private getNextProductId() : number{

    // calculer l'id suivant en se basant sur le tableau existant
    const ids = this.productService.getProduits().map((product) => product.id)
   return Math.max(0, ...ids) +1;
  }
}
