import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import Item from 'src/app/models/item.model';
import { BagService } from 'src/app/services/bag.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Item[];
  bag: Item[] = [];

  message = 'Hello from home';

  title = '';

  constructor(
    private itemService: ItemService,
    private bagService: BagService
  ) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  // sendBag() {
  //   this.bagService.transferBag(this.bag);
  // }

  // showItems() {
  //   console.log(this.bag);
  // }

  addToBag(product: any) {

    if (localStorage.getItem('bag') === null) {
      this.bag = [];
    } else {
      this.bag = JSON.parse(localStorage.getItem('bag'));
    }

    this.bag.push(product);
    localStorage.setItem('bag', JSON.stringify(this.bag));

    console.log('Added', product);

  }

}
