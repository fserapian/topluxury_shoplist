import { Injectable } from '@angular/core';
import Item from '../models/item.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  // productsUrl = 'http://localhost:8082/BijouxAPI/ressources/MyService/produits';

  itemUrl = 'http://localhost:5000/api/v1/items';
  items: Item[];

  constructor(private http: HttpClient) {
    // this.items = [
    //   {
    //     id: '1',
    //     name: 'Tangarian Ring',
    //     description: 'This is the tangarian ring',
    //     price: 100.0,
    //     imageUrl: './assets/img/bague1.jpg',
    //   },
    //   {
    //     id: '2',
    //     name: 'Rare Bracelet',
    //     description: 'This is the rare bracelet',
    //     price: 110.0,
    //     imageUrl: './assets/img/bracelet1.jpg',
    //   },
    //   {
    //     id: '3',
    //     name: 'Gold Ring',
    //     description: 'This is the gold ring',
    //     price: 150.0,
    //     imageUrl: './assets/img/bague2.jpg',
    //   },
    //   {
    //     id: '4',
    //     name: 'Gold Bitcoin',
    //     description: 'This is the bitcoin',
    //     price: 3200.0,
    //     imageUrl: './assets/img/bitcoin.jpg',
    //   },
    //   {
    //     id: '5',
    //     name: 'Legendary Ring',
    //     description: 'This is the legendary ring',
    //     price: 701.0,
    //     imageUrl: './assets/img/bague3.jpg',
    //   },
    //   {
    //     id: '6',
    //     name: 'Diamond Bracelet',
    //     description: 'This is the diamond bracelet',
    //     price: 1100.0,
    //     imageUrl: './assets/img/bracelet2.jpg',
    //   }
    // ];
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemUrl);

    // return of(this.items);
  }

}
