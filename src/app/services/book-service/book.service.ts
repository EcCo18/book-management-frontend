import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import BookDto from "../../models/dtos/BookDto";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<BookDto[]> {
    return this.http.get<BookDto[]>("/api/book");
  }
}
