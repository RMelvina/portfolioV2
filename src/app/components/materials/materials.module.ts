import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatProgressBarModule,
    // IvyCarouselModule,
    MatIconModule,
    MatDialogModule,
  ],
})
export class MaterialsModule {}
