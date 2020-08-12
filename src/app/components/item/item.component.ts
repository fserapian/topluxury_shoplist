import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Output() addToBagEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendEvent() {
    // console.log('Adding to bag');
    this.addToBagEvent.emit(this.item);
  }

}
