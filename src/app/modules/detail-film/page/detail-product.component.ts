import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs';
import { Product } from 'src/app/data/schema/product';
import { ProductService } from 'src/app/data/service/product/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit{
  isLoading:boolean= false;
  status:boolean=false;
  listProduct:any[] = [];
  totalPrice: number = 0;
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
     this.productService.getDetailProductFromApi(productId)
       .pipe(delay(1000))
       .subscribe((product:Product)=> { 
          this.isLoading = false;
          this.detailProduct = product;
          this.getAllProductsFromFire(this.detailProduct.id)
      })
  }

  
  getAllProductsFromFire(productId:number) { 
     this.productService.getAllProducts().subscribe(res => {
      this.listProduct = res.map((e:any) => {
         const product = e.payload.doc.data();
         return product
      })

      this.listProduct.map((data)=> {
         if(data.id === productId) {
            this.status = true;
         }
      })
     })
  }

  addProduct(product: Product){     
     return this.productService.addProduct(product)
  }

  deleteProduct(product: Product) {
     this.status = false;
     return this.productService.deleteProduct(product);
  }
}
