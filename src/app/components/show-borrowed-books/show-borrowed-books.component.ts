import { Component, OnInit } from '@angular/core';
import { BookService } from "../../services/book/book.service";
import { Observable } from "rxjs";
import BookDto from "../../models/dtos/BookDto";

@Component({
  selector: 'app-borrowed-books',
  templateUrl: './show-borrowed-books.component.html',
  styleUrls: ['./show-borrowed-books.component.css']
})
export class ShowBorrowedBooksComponent implements OnInit {

  books$: Observable<BookDto[]>;

  constructor(private bookService: BookService) {
    this.books$ = this.bookService.getAllBooks();
  }

  ngOnInit(): void {
  }
}
