import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() addToBagEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendEvent() {
    // console.log('Adding to bag');
    this.addToBagEvent.emit(this.product);
  }

}
