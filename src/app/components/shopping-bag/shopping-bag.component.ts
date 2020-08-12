import { Component, OnInit } from '@angular/core';
import { BagService } from 'src/app/services/bag.service';
import { Item } from 'src/app/models/item.model';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.css']
})
export class ShoppingBagComponent implements OnInit {
  faTimes = faTimes;

  bag: Item[] = [];

  constructor(private bagService: BagService) { }

  ngOnInit() {
    const bag = JSON.parse(localStorage.getItem('bag'));

    bag.forEach((item: Item) => this.bag.push(item));
  }

  removeItem(item: Item) {
    // this.bag.splice(parseInt(item.id), 1);
    console.log(item);
  }

}
