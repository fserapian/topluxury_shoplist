import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { NgForm } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  @Output() itemCreated = new EventEmitter<Item>();

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onCreate(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { name, description, price } = form.value;
    this.itemService.createItem(name, description, price);
  }

}
