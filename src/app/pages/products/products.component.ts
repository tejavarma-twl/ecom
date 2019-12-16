import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private c: CommonService) { }

  ngOnInit() {
    // console.log("yes initiated!")
    this.c.cart.push("hello");
    console.log(this.c.getCartItems())
  }

  addToCart(product){
    this.c.cart.push(product);
  }

}
