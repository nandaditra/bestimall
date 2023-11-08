import { Component } from '@angular/core';
import { Product } from 'src/app/data/schema/product';
import { ProductService } from 'src/app/data/service/product/product.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent {
  listCategoryProduct: Product[] = []  
    query: String = ""

    constructor(
       private productService: ProductService,
    ){
       
    }

    ngOnInit():void{
      this.getListCategory();
    }
    
    getListCategory() {
      return this.productService.getCategoryProductFromApi("men's clothing")
      .subscribe((product: Product[])=> {
         this.listCategoryProduct = product;
      })
    }
}
