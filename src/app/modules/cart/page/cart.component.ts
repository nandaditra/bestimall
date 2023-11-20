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
   paymentHandler: any = null;
   totalPrice: number = 0;
   loading:boolean = false;
   status:boolean= false;

   constructor(private productService:ProductService){
    
   }

   ngOnInit():void{
      this.getAllProducts();
      this.invokeStripe();
   }

   makePayment(amount: any) {
      const paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51OECI9HuqQhBRUNdvbjjJUKAMAvRX1qHSsMCMwbyAAxsfsXI2SAo7QUWLquvB43XRgnYw6fMs09rO12mEmdOjxXA00f2UTjeyQ',
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log(stripeToken);
          alert('Stripe token generated!');
        },
      });
      paymentHandler.open({
        name: 'Bestimall Payment',
        description: this.listCart.length +' item',
        amount: amount * 100,
      });
    }

   invokeStripe() {
      if(!window.document.getElementById('stripe-script')) {
         const script = window.document.createElement('script');
         script.id = 'stripe-script';
         script.type = 'text/javascript';
         script.src = 'https://checkout.stripe.com/checkout.js';
         script.onload = () => {
         this.paymentHandler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_51OECI9HuqQhBRUNdvbjjJUKAMAvRX1qHSsMCMwbyAAxsfsXI2SAo7QUWLquvB43XRgnYw6fMs09rO12mEmdOjxXA00f2UTjeyQ',
            locale: 'auto',
            token: function (stripeToken: any) {
               console.log(stripeToken);
               alert('Payment has been successfull!');
            },
         });
       }
       window.document.body.appendChild(script);
      }
   }

   getAllProducts() {
       this.loading = true;
       this.productService.getAllProducts().subscribe(res => {
         this.listCart = res.map((e:any) => {
             const product = e.payload.doc.data();
             product.id = e.payload.doc.id;
             this.totalPrice += product.price;
             return product
         })
         if(this.listCart.length === 0) this.status = true;
         this.loading = false;
      })
   }

   deleteProduct(product:Product) {
      if (window.confirm('Are you sure you want to delete ' + product.title + ' ?')) {
         this.totalPrice -= product.price;
         this.productService.deleteProduct(product);
      }
   }
}
