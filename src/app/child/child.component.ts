import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  private _name: string;

  constructor() { }

  get name(): string {
    return this._name.toUpperCase();
  }

  @Input()
  set name(name: string) {
    console.log('prev value: ', this._name);
    console.log('got name: ', name);
    this._name = name;
  }

  ngOnInit() {
    console.log('on init');
    console.log(this._name);
  }


}
