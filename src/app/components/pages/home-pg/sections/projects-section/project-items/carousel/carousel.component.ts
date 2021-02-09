import { FocusTrap } from '@angular/cdk/a11y';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { never } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, AfterViewInit {
  // Declaration
  active = 'active';
  currentIn: any;
  mobileP: any;

  // Inputs
  @Input() projects: any;
  @Input() pId: any;
  @Input() webIndicators!: boolean;
  @Input() mobileIndicators!: boolean;
  @Input() title: any;

  // Output
  @Output() showAll = new EventEmitter();

  // View Child
  @ViewChild('mobileProject') mobileProject!: ElementRef;
  @ViewChild('current') current!: ElementRef;
  @ViewChild('slider') slider!: ElementRef;
  @ViewChild('item') item!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.projectImgs();
  }

  // clickMeBtn(){
  //   var c = document.getElementsByClassName('color');
  //   var s = document.getElementsByClassName('sli');

  //   c[0].classList.remove('color')
  //   c[0].classList.add('another')
  //   console.log(c)
  // }

  ngAfterViewInit() {
   
  }

  getImg(indexNum: any) {
    var img = document.querySelectorAll('.slider .image');
    img[indexNum].classList.remove('active');
    img[indexNum].classList.add('active');
  }

  // Methods
  // Setting the images to display when the next project is clicked
  projectImgs() {
    $(document).ready(function () {
      var getActiveSlideIndex = function () {
        return $('#mobileProjects .active').index(
          '#mobileProjects .carousel-item'
        );
      };

      var slider = function (IndexNumber: any) {
        $(`.slider .image`)
          .removeClass('active')      
          .eq(IndexNumber)
          .addClass('active');
      };

      slider(getActiveSlideIndex());
      $('#mobileProjects').on('slid.bs.carousel', function () {
        slider(getActiveSlideIndex());
      });
    });
  }
}
