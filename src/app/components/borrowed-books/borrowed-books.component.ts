import { Component, OnInit } from '@angular/core';
import { BookService } from "../../services/book-service/book.service";
import { Observable } from "rxjs";
import BookDto from "../../models/dtos/BookDto";

@Component({
  selector: 'app-borrowed-books',
  templateUrl: './borrowed-books.component.html',
  styleUrls: ['./borrowed-books.component.css']
})
export class BorrowedBooksComponent implements OnInit {

  books$: Observable<BookDto[]>;

  constructor(private bookService: BookService) {
    this.books$ = this.bookService.getAllBooks();
  }

  ngOnInit(): void {
  }
}
