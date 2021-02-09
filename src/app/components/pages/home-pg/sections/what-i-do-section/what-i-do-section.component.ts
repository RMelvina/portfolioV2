import { Component, OnInit } from '@angular/core';
import { whatIDo } from '../../../../shared/arrays/services'

@Component({
  selector: 'app-what-i-do-section',
  templateUrl: './what-i-do-section.component.html',
  styleUrls: ['./what-i-do-section.component.css'],
})
export class WhatIDoSectionComponent implements OnInit {
  // Getting information from the array
  arrays = whatIDo;
  constructor() {}

  ngOnInit(): void {}
}
