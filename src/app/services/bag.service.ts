import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Item from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class BagService {
  bagSubject = new Subject<Item[]>();

  messageSubject = new Subject();

  transferBag(bag: Item[]) {
    this.bagSubject.next(bag);
  }

  transferMsg(msg: string) {
    this.messageSubject.next(msg);
  }
}
