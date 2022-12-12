import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowNewBookModalComponent } from './borrow-new-book-modal.component';

describe('BorrowNewBookComponent', () => {
  let component: BorrowNewBookModalComponent;
  let fixture: ComponentFixture<BorrowNewBookModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowNewBookModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowNewBookModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
