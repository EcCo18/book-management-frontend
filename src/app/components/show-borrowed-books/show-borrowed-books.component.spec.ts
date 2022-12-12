import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBorrowedBooksComponent } from './show-borrowed-books.component';

describe('BorrowedBooksComponent', () => {
  let component: ShowBorrowedBooksComponent;
  let fixture: ComponentFixture<ShowBorrowedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBorrowedBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBorrowedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
