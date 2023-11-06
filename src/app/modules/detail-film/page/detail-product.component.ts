import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/data/schema/product';
import { ProductService } from 'src/app/data/service/product/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  detailProduct: Product = {
   id: 0,
   title: '',
   price: 0,
   description: '',
   category: '',
   image: '',
   rating : {
      rate: 0,
      count: 0
   },
  };

  constructor(
     private productService: ProductService,
     private route: ActivatedRoute,
     ){
  }

  ngOnInit():void {
     this.getProductById();
  }

  getProductById(){
     const productId = Number(this.route.snapshot.paramMap.get('productId'));
     return this.productService.getDetailProductFromApi(productId)
       .subscribe((product:Product)=> { 
          this.detailProduct = product
       })
  }
}
