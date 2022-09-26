import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import BookDto from "../../models/dtos/BookDto";
import { BookService } from "../../services/book-service/book.service";

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {

  books$: Observable<BookDto[]>;

  constructor(private bookService:BookService) {
    this.books$ = this.bookService.getAllBooks();
  }

  ngOnInit(): void {
  }

}
