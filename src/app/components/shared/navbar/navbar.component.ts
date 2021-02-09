import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { navbarItems } from '../arrays/navbarItems';
import { projectDetails } from '../../shared/arrays/projects';
import { throwMatDuplicatedDrawerError } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  // ---------------------------------------------------------------------------------
  //                              Declaration
  // ---------------------------------------------------------------------------------
  isScrolled = false;
  projectId: any;
  color = 'spanFontColor';
  isClicked!: boolean;
  icon: any;
  isNavLinkClicked = false;
  id: any;
  icon1 = 'fa fa-bars';
  // ---------------------------------------------------------------------------------

  // ---------------------------------------------------------------------------------
  //                                   Input
  // ---------------------------------------------------------------------------------
  @Input() navbarI: any;
  @Input() showOne: any;
  @Input() showTwo: any;
  @Input() name: any;
  // ---------------------------------------------------------------------------------

  // ---------------------------------------------------------------------------------
  //                                   Output
  // ---------------------------------------------------------------------------------
  @Output() prevsBtn = new EventEmitter();
  @Output() nextBtn = new EventEmitter();
  @Output() toSections = new EventEmitter<any>();

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private element: ElementRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  // ---------------------------------------------------------------------------------
  //                                  ViewChild
  // ---------------------------------------------------------------------------------
  @ViewChild('navLink') navLink = this.el;
  @ViewChild('navbarC') navbarC = this.element;
  // ---------------------------------------------------------------------------------

  ngOnInit(): void {
    if (!this.isClicked) {
      this.icon = 'fa fa-bars';
    }
  }

  ngAfterViewInit() {
    console.log(this.navbarC);
  }
  // ---------------------------------------------------------------------------------
  //                                HostListener
  // ---------------------------------------------------------------------------------
  @HostListener('window:scroll')
  scrollEvent() {
    window.pageYOffset > 20
      ? (this.isScrolled = true)
      : (this.isScrolled = false);
  }
  // ---------------------------------------------------------------------------------
  //                                Open navbar
  // ---------------------------------------------------------------------------------
  openNavbar() {
    this.isClicked = !this.isClicked;
    this.icon = this.isClicked ? 'fa fa-times' : 'fa fa-bars';
  }
  // ---------------------------------------------------------------------------------
  //                            Click next/prevs btn
  // ---------------------------------------------------------------------------------

  clickFunction(a: any) {
    if (a == 'nextBtn()') {
      this.nextBtn.emit();
    } else {
      this.prevsBtn.emit();
    }
  }
  // ---------------------------------------------------------------------------------
  //                      Go to sections on the main page
  // ---------------------------------------------------------------------------------

  toSection(url: any) {
    var currentUrl = this.router.url;
    document.getElementById(url)?.scrollIntoView({ behavior: 'smooth' });
    if (currentUrl != '/') {
      this.router.navigate(['/']);
    }
  }
}
