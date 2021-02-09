import { Component } from '@angular/core';
import { navbarItems } from '../app/components/shared/arrays/navbarItems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarHomeItems = navbarItems;
}
