import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css'],
})
export class DialogContentComponent implements OnInit {
  // ------------------------
  //         Inputs
  // ------------------------
  @Input() project: any;
  @Input() title: any;

  // ------------------------
  //      Output Event
  // ------------------------
  @Output() closeDialog = new EventEmitter();
  // ------------------------

  constructor() {}

  ngOnInit(): void {}
}
