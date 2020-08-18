import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Output() addToBagEvent = new EventEmitter();

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  sendEvent() {
    // console.log('Adding to bag');
    this.addToBagEvent.emit(this.item);
  }

  onDelete(id: string) {
    console.log('Deleting', id);
    this.itemService.deleteItem(id);
  }

}
