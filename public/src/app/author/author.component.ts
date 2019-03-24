import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit { 
  id;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => 
    this.id = params['id']);
  }

}
