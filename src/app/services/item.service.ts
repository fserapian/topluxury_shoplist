import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[];
  itemsUpdated = new Subject();

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<Item[]> {
    return this.http.get<{ success: boolean, data: Item[] }>(environment.ITEMS_URL)
      .pipe(map(res => res.data));
  }

  deleteItem(itemId: string) {
    this.http.delete(environment.ITEMS_URL + '/' + itemId)
      .subscribe(res => {
        console.log(res);
        this.items = this.items.filter(item => item._id !== itemId);
        this.itemsUpdated.next([...this.items]);
      });
  }

}
