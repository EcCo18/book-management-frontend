import { Component, OnInit } from '@angular/core';

interface Book {
  name: string;
  isbn: string;
  borrowDate: number;
  author: string;
}

const COUNTRIES: Book[] = [
  {
    name: 'Building Microservices',
    isbn: '4354356564',
    borrowDate: 2022,
    author: "146989754"
  },
  {
    name: 'Canada',
    isbn: '345345345345',
    borrowDate: 9976140,
    author: "36624199"
  },
  {
    name: 'United States',
    isbn: '345643653',
    borrowDate: 9629091,
    author: "324459463"
  },
  {
    name: 'China',
    isbn: '43543543543',
    borrowDate: 9596960,
    author: "1409517397"
  }
];

@Component({
  selector: 'app-borrowed-books',
  templateUrl: './borrowed-books.component.html',
  styleUrls: ['./borrowed-books.component.css']
})
export class BorrowedBooksComponent implements OnInit {

  countries = COUNTRIES;

  constructor() {
  }

  ngOnInit(): void {
  }
}
