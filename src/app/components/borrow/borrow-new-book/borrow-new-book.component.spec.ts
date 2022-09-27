import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowNewBookComponent } from './borrow-new-book.component';

describe('BorrowNewBookComponent', () => {
  let component: BorrowNewBookComponent;
  let fixture: ComponentFixture<BorrowNewBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowNewBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowNewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
