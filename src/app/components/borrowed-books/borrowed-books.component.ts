import { Component, OnInit } from '@angular/core';
import Book from "../../models/Book";
import { BookService } from "../../services/book-service/book.service";

const BOOKS: Book[] = [
  {
    name: 'Building Microservices',
    isbn: '4354356564',
    borrowDate: 2022,
    author: "146989754"
  },
  {
    name: 'Route 66',
    isbn: '345345345345',
    borrowDate: 2001,
    author: "36624199"
  },
  {
    name: 'United States',
    isbn: '345643653',
    borrowDate: 1978,
    author: "324459463"
  },
  {
    name: 'Die zweite Legion',
    isbn: '43543543543',
    borrowDate: 2022,
    author: "1409517397"
  }
];

@Component({
  selector: 'app-borrowed-books',
  templateUrl: './borrowed-books.component.html',
  styleUrls: ['./borrowed-books.component.css']
})
export class BorrowedBooksComponent implements OnInit {

  books = BOOKS;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(books => books.forEach(book => console.log(book)));
  }
}
