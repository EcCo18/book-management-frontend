import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import BookDto from "../../models/dtos/BookDto";
import { Observable } from "rxjs";
import NewBookData from "../../models/NewBookData";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<BookDto[]> {
    return this.http.get<BookDto[]>("/api/book");
  }

  postNewBook(newBook: NewBookData) {
    console.log("emitted post");
    return this.http.post("http://localhost:8082/api/book", newBook);
  }
}
