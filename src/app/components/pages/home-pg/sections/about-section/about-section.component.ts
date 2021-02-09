import { Component, OnInit } from '@angular/core';
import { aboutMeD } from '../../../../shared/text';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css'],
})
export class AboutSectionComponent implements OnInit {
  
  // Getting about me desc from text file
  aboutMeD = aboutMeD;
  

  constructor() {}

  ngOnInit(): void {}
}
