import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../../schema/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data_api: string = "https://fakestoreapi.com/products/"

  constructor(private http:HttpClient) { }

  getApiListProducts(): Observable<Product[]>{
     return this.http.get<Product[]>(this.data_api);;
  }

  getApiDetailProduct(productId: number): Observable<Product>{
    return this.http.get<Product>(this.data_api+productId)
  }

  getApiCategoryProduct(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.data_api+'/category/'+ category)
  }
}
