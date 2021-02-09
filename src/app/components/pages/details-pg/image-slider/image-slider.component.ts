import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  // Inputs
  @Input() imgs!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
