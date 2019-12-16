import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private c: CommonService) { }

  ngOnInit() {
    console.log(this.c.getCartItems())
    this.c.cart.push('hey')
  }

  getCartList(){
    console.log(this.c.getCartItems());
  }

}
