import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/data/schema/product';
import { ProductService } from 'src/app/data/service/product/product.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent {
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
      return this.productService.getCategoryProductFromApi("electronics")
      .subscribe((product: Product[])=> {
         this.listCategoryProduct = product;
      })
    }
}
