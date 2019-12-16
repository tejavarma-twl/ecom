import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  cart = []
  constructor() {
    
  }
  getCartItems(){
    return this.cart;
  }
}
