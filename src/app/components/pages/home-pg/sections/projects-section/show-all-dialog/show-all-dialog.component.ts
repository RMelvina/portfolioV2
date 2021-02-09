import { Component, OnInit } from '@angular/core';
import {mobileProjects, webProjects} from '../../../../../shared/arrays/projects'
import {ProjectItemsComponent} from '../project-items/project-items.component'
import {MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-show-all-dialog',
  templateUrl: './show-all-dialog.component.html',
  styleUrls: ['./show-all-dialog.component.css']
})
export class ShowAllDialogComponent implements OnInit {
   //  Declarations
   title1 = 'Mobile Projects';
   title2 = 'Web Projects';
   mobileProjects = mobileProjects;
   webProjects = webProjects
  constructor(public dialogRef: MatDialogRef<ProjectItemsComponent>) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
