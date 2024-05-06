import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../../entities/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService  {


  private _baseUrl = 'http://localhost:8080/api/products';
  private _httpClient!: HttpClient;
  
  constructor(httpClient: HttpClient) {
		this._httpClient = httpClient;
	}


  getProductList(): Observable<Product[]> {
    return this._httpClient.get<GetResponse>(this._baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
