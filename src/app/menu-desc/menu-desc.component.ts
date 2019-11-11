import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-desc',
  templateUrl: './menu-desc.component.html',
  styleUrls: ['./menu-desc.component.scss']
})
export class MenuDescComponent implements OnInit {

  coffeePun = `Bean`
  constructor() { }

  ngOnInit() {
  }

}
