import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { navbarItemsDetails } from '../../shared/arrays/navbarItems';
import { ActivatedRoute, Router } from '@angular/router';
import { projectDetails } from '../../shared/arrays/projects';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-details-pg',
  templateUrl: './details-pg.component.html',
  styleUrls: ['./details-pg.component.css'],
})
export class DetailsPgComponent implements OnInit, AfterViewInit {
  // Declarations
  navbarItems = navbarItemsDetails;
  projectId: any;
  projectDetails: any;
  projectDesc: any;
  id: any;
  isScrolled = false;
  isTrue!: boolean;

  // ---------------------------
  //       ViewChils
  // ---------------------------
  @ViewChild('prev') prev!: ElementRef;
  @ViewChild('next') next!: ElementRef;
  // ---------------------------

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.isTrue = false;

    this.route.paramMap.subscribe((params) => {
      window.scrollTo(0, 0);
      return (this.projectDetails = projectDetails.find((p) => {
        return (this.id = p.id === Number(+params.get('pId')!));
      }));
    });
  }

  ngAfterViewInit() {
    console.log(this.next);
  }

  // ---------------------------
  //        HostListener
  // ---------------------------
  @HostListener('window:scroll')
  scrollEvent() {
    window.pageYOffset > 20
      ? (this.isScrolled = true)
      : (this.isScrolled = false);
  }
  // ---------------------------

  // ---------------------------
  //        Scroll Up
  // ---------------------------
  scrollUp() {
    window.scroll(0, 0);
  }
  // ---------------------------

  nextBtn() {
    let id = parseInt(this.route.snapshot.paramMap.get('pId')!);
    this.projectId = id;
    let next = this.projectId + 1;
    if (this.projectId != projectDetails.length) {

      // this.next.nativeElement.disabled = true;
      this.router.navigate(['/details', next]);
    }
    

    if (this.projectId == 6) {
      this.next.nativeElement.disabled = true;
      console.log(this.projectId);
    }
    if (this.projectId != 2) {
      this.prev.nativeElement.disabled = false;
      console.log(this.projectId);
    }
  }

  prevBtn() {
    let id = parseInt(this.route.snapshot.paramMap.get('pId')!);
    this.projectId = id;
    let prev = this.projectId - 1;
    if (this.projectId != 1) {
      this.router.navigate(['/details', prev]);
    }

    if (this.projectId != 6) {
      this.next.nativeElement.disabled = false;
      console.log(this.projectId);
    }

    if (this.projectId == 2) {
      this.prev.nativeElement.disabled = true;
      console.log(this.projectId);
    }
  }
}
