import { Component, OnInit } from '@angular/core';
import { BagService } from 'src/app/services/bag.service';
import { Product } from 'src/app/models/item.model';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.css']
})
export class ShoppingBagComponent implements OnInit {
  faTimes = faTimes;

  bag: Product[] = [];

  constructor(private bagService: BagService) { }

  ngOnInit() {
    const bag = JSON.parse(localStorage.getItem('bag'));

    bag.forEach((item: Product) => this.bag.push(item));
  }

  removeItem(item: Product) {
    // this.bag.splice(parseInt(item.id), 1);
    console.log(item);
  }

}
