import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  products = [
    {id:"p1", name:"Raymond Men's Shirt",price:1500,discount:20,dprice:0,quantity:1},
    {id:"p2", name:"Dennis Lingo Men's Shirt",price:2500,discount:60,dprice:0,quantity:1},
    {id:"p3", name:"Jack & Jones Men's Shirt",price:1599,discount:40,dprice:0,quantity:1},
    {id:"p4", name:"Highlander Men's Shirt",price:2100,discount:35,dprice:0,quantity:1},
    {id:"p5", name:"Zombom Men's Shirt",price:2900,discount:50,dprice:0,quantity:1}
  ]
  // cart = {
  //   "p1":{id:"p1", name:"Raymond Men's Shirt",price:1500,discount:20,dprice:0,quant:1}
  // }

  cart = {}
  
  constructor() {
    
  }
  getCartItems(){
    return this.cart;
  }
}
