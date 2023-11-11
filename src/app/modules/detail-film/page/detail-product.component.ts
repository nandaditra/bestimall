import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs';
import { Product } from 'src/app/data/schema/product';
import { ProductService } from 'src/app/data/service/product/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  isLoading:boolean= false
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
     this.isLoading = true;
     const productId = Number(this.route.snapshot.paramMap.get('productId'));
     return this.productService.getDetailProductFromApi(productId)
       .pipe(delay(2000))
       .subscribe((product:Product)=> { 
          this.isLoading = false;
          this.detailProduct = product;
       })
  }
}
