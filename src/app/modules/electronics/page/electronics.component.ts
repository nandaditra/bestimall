import { Component } from '@angular/core';
import { Product } from 'src/app/data/schema/product';
import { ProductService } from 'src/app/data/service/product/product.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent {
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
      return this.productService.getCategoryProductFromApi("electronics")
      .subscribe((product: Product[])=> {
         this.listCategoryProduct = product;
         this.loading = false;
      })
    }
}
