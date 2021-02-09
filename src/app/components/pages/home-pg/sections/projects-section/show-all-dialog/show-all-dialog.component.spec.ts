import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllDialogComponent } from './show-all-dialog.component';

describe('ShowAllDialogComponent', () => {
  let component: ShowAllDialogComponent;
  let fixture: ComponentFixture<ShowAllDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
