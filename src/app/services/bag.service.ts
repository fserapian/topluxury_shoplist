import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class BagService {
  bagSubject = new Subject<Product[]>();

  messageSubject = new Subject();

  transferBag(bag: Product[]) {
    this.bagSubject.next(bag);
  }

  transferMsg(msg: string) {
    this.messageSubject.next(msg);
  }
}
