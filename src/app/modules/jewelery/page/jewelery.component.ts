import { Component } from '@angular/core';
import { Product } from 'src/app/data/schema/product';
import { ProductService } from 'src/app/data/service/product/product.service';

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.css']
})
export class JeweleryComponent {
    listCategoryProduct: Product[] = []  
    loading:boolean = false;

    constructor(
       private productService: ProductService,
    ){
       
    }

    ngOnInit():void{
      this.getListCategory();
    }
    
    getListCategory() {
      this.loading = true;
      return this.productService.getCategoryProductFromApi("jewelery")
      .subscribe((product: Product[])=> {
         this.listCategoryProduct = product;
         this.loading = false;
      })
    }
}
