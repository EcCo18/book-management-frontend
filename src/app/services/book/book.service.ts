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
    console.log("emitted get");
    return this.http.get<BookDto[]>("/api/v1/books");
  }

  postNewBook(newBook: NewBookData) {
    return this.http.post("/api/v1/books", newBook).subscribe(response =>
      console.log(response)
    );
  }
}
