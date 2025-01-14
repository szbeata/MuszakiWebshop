import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';
import { Product } from '../models/product.model';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{
  products: Product[] = [];  
  columns: any;

  constructor(
    private base:BaseService, 
    private config:ConfigService)
    {
      this.config.getLinks().subscribe(
        (res:any)=>this.columns=res["columns"]
      )
    }

    ngOnInit(): void {
      this.base.getProducts().subscribe((res: any) => {
        this.products = Object.values(res);
      });
  }

  addProduct(newProduct: Product) {
    this.base.postProducts(newProduct).forEach(
      (res) => {
        console.log('Termék hozzáadva:', res);
        this.products.push();  
      },
    );
  }

  updateProduct(id: number, updatedProduct: Product) {
    this.base.putProducts(id, updatedProduct).forEach(
      (res) => {
        console.log('Termék módosítva:', res);
       
      },
    );
  }

  deleteProduct(id: number) {
    this.base.deleteProducts(id).forEach(
      (res) => {
        console.log('Termék törölve:', res);
        this.products = this.products.filter(product => product.id !== id);
      },
    );
  }
}