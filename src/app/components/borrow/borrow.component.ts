import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import BookDto from "../../models/dtos/BookDto";
import { BookService } from "../../services/book-service/book.service";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { BorrowNewBookComponent } from "./borrow-new-book/borrow-new-book.component";

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {

  books$: Observable<BookDto[]>;

  constructor(private bookService: BookService, private modalService: NgbModal) {
    this.books$ = this.bookService.getAllBooks();
  }

  ngOnInit(): void {
  }

  openBorrowModal(): void {
    const modalRef =
      this.modalService.open(
        BorrowNewBookComponent,
        {ariaLabelledBy: 'modal-basic-title'}
      );
    this.subscribeToModalResult(modalRef);
  }

  subscribeToModalResult(modalRef: NgbModalRef): void {
    modalRef.result.then(result => console.log(result));
  }

}
