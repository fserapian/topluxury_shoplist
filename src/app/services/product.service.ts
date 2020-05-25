import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // productsUrl = 'http://localhost:8082/BijouxAPI/ressources/MyService/produits';

  products: Product[];

  constructor(private http: HttpClient) {
    this.products = [
      {
        id: '1',
        name: 'Tangarian Ring',
        imageUrl: './assets/img/bague1.jpg',
        price: 100.0,
        isNew: false
      },
      {
        id: '2',
        name: 'Rare Bracelet',
        imageUrl: './assets/img/bracelet1.jpg',
        price: 110.0,
        isNew: false
      },
      {
        id: '3',
        name: 'Gold Ring',
        imageUrl: './assets/img/bague2.jpg',
        price: 150.0,
        isNew: false
      },
      {
        id: '4',
        name: 'Gold Bitcoin Coin',
        imageUrl: './assets/img/bitcoin.jpg',
        price: 3200.0,
        isNew: true
      },
      {
        id: '5',
        name: 'Legendary Ring',
        imageUrl: './assets/img/bague3.jpg',
        price: 701.0,
        isNew: true
      },
      {
        id: '6',
        name: 'Diamond Bracelet',
        imageUrl: './assets/img/bracelet2.jpg',
        price: 1100.0,
        isNew: false
      }
    ];
  }

  getProducts(): Observable<Product[]> {
    // return this.http.get<Product[]>(this.productsUrl);

    return of(this.products);
  }

}
