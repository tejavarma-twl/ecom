import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
items=0;
  constructor(private c: CommonService) { }

  ngOnInit() {
    // this.items = this.c.cart.length;
  }

}
