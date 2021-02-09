import { Component, OnInit } from '@angular/core';
import { navbarItems } from '../../shared/arrays/navbarItems';
@Component({
  selector: 'app-home-pg',
  templateUrl: './home-pg.component.html',
  styleUrls: ['./home-pg.component.css'],
})
export class HomePgComponent implements OnInit {
  // Declaration
  navbarHomeItems = navbarItems;

  constructor() {}

  ngOnInit(): void {}
  
  toSections(url: any) {
    document.getElementById(url)?.scrollIntoView({ behavior: 'smooth' });
  }
}
