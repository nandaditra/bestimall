import { Component } from '@angular/core';
import { Product } from 'src/app/data/schema/product';
import { ProductService } from 'src/app/data/service/product/product.service';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css']
})
export class WomensComponent {
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
      return this.productService.getCategoryProductFromApi("women's clothing")
      .subscribe((product: Product[])=> {
         this.listCategoryProduct = product;
      })
    }
}
