import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[];

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<Item[]> {
    return this.http.get<{ success: boolean, data: Item[] }>(environment.ITEMS_URL)
      .pipe(map(res => res.data));
  }

}
