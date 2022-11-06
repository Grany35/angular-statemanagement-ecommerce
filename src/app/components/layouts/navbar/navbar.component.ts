import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BasketModel } from './../../../models/baskets.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  basketCount$ = 0;
  baskets$: BasketModel[] = [];

  constructor(private store: Store<{ baskets: BasketModel[] }>) {
    this.store.select('baskets').subscribe((res) => {
      this.basketCount$ = res.length;
      this.baskets$=res;
    });
  }

  ngOnInit(): void {}
}
