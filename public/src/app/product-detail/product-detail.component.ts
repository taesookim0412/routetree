import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id;
  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      this.id = params['id'];
    })
  }
}
