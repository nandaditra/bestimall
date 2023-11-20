import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data/schema/product';
import { ProductService } from 'src/app/data/service/product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   listCart: any[] = []; 
   totalPrice: Number = 0;

   constructor(private productService:ProductService){
    
   }

   ngOnInit():void{
      this.getAllProducts();
   }

   getAllProducts() {
       this.productService.getAllProducts().subscribe(res => {
         this.listCart = res.map((e:any) => {
             const product = e.payload.doc.data();
             product.id = e.payload.doc.id;
             this.totalPrice += product.price;
             return product
          })
      })
   }

   deleteProduct(product:Product) {
      if (window.confirm('Are you sure you want to delete ' + product.title + ' ?')) {
         this.productService.deleteProduct(product);
      }
   }
}
