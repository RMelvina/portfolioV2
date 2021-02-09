import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ---------Pages Componenets----------------
import { HomePgComponent } from './components/pages/home-pg/home-pg.component';
import { DetailsPgComponent } from './components/pages/details-pg/details-pg.component';
import { TopSectionComponent } from './components/pages/home-pg/sections/top-section/top-section.component';
import { AboutSectionComponent } from './components/pages/home-pg/sections/about-section/about-section.component';
import { ProjectsSectionComponent } from './components/pages/home-pg/sections/projects-section/projects-section.component';
import { SkillsSectionComponent } from './components/pages/home-pg/sections/skills-section/skills-section.component';
import { WhatIDoSectionComponent } from './components/pages/home-pg/sections/what-i-do-section/what-i-do-section.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
// -----------------------------------------------

// ------------------------------------------------
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './components/materials/materials.module';
import { ProjectItemsComponent } from './components/pages/home-pg/sections/projects-section/project-items/project-items.component';
import { CarouselComponent } from './components/pages/home-pg/sections/projects-section/project-items/carousel/carousel.component';
import { ContactMeSectionComponent } from './components/pages/home-pg/sections/contact-me-section/contact-me-section.component';
import { ShowAllDialogComponent } from './components/pages/home-pg/sections/projects-section/show-all-dialog/show-all-dialog.component';
import { DialogContentComponent } from './components/pages/home-pg/sections/projects-section/show-all-dialog/dialog-content/dialog-content.component';
import { ImageSliderComponent } from './components/pages/details-pg/image-slider/image-slider.component';
import { DetailsComponent } from './components/pages/details-pg/details/details.component';

// ------------------------------------------------

@NgModule({
  declarations: [
    AppComponent,
    HomePgComponent,
    DetailsPgComponent,
    TopSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    WhatIDoSectionComponent,
    NavbarComponent,
    ProjectItemsComponent,
    CarouselComponent,
    ContactMeSectionComponent,
    ShowAllDialogComponent,
    DialogContentComponent,
    ImageSliderComponent,
    DetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
