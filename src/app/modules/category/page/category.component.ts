import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/data/schema/product';
import { ProductService } from 'src/app/data/service/product/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
    listCategoryProduct: Product[] = []  

    constructor(
       private productService: ProductService,
       private route: ActivatedRoute
    ){
       
    }

    ngOnInit():void{
      this.getListCategory();
    }

    getListCategory() {
      let listCategory = String(this.route.snapshot.paramMap.get('categoryId'));
      return this.productService.getCategoryProductFromApi(listCategory)
      .subscribe((product: Product[])=> {
         this.listCategoryProduct = product;
      })
    }
}
