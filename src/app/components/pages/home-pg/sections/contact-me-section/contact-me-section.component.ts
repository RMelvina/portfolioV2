import { Component, OnInit } from '@angular/core';
import { icons } from '../../../../shared/arrays/icons';

@Component({
  selector: 'app-contact-me-section',
  templateUrl: './contact-me-section.component.html',
  styleUrls: ['./contact-me-section.component.css'],
})
export class ContactMeSectionComponent implements OnInit {
  // Declarations
  // Getting icons from icons array
  icons = icons;

  constructor() {}

  ngOnInit(): void {}
}
