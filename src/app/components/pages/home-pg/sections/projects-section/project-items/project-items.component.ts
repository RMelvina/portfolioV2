import { Component, OnInit } from '@angular/core';
import { mobileProjects, webProjects } from '../../../../../shared/arrays/projects';
import {ShowAllDialogComponent} from '../show-all-dialog/show-all-dialog.component'
import {MatDialog} from '@angular/material/dialog'
import { data } from 'jquery';


@Component({
  selector: 'app-project-items',
  templateUrl: './project-items.component.html',
  styleUrls: ['./project-items.component.css'],
})
export class ProjectItemsComponent implements OnInit {
  // Array
  projects = mobileProjects.concat(webProjects);
  

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}


  // ---------------------
  //   Open dialog box
  // ---------------------

  showAll(){
    this.openDialogBox();
  }
  
  openDialogBox(){
    const openDialog = this.dialog.open(ShowAllDialogComponent, {
      panelClass: 'show-all',
      data: {projects : this.projects}

    });

  }
  
}
