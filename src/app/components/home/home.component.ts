import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { BagService } from 'src/app/services/bag.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];
  bag: Product[] = [];

  message = 'Hello from home';

  title = '';

  constructor(
    private productService: ProductService,
    private bagService: BagService
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => this.products = products);
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
