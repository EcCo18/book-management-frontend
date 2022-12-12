import { Injectable } from '@angular/core';
import BookDto from "../../models/dtos/BookDto";
import NewBookData from "../../models/NewBookData";

@Injectable({
  providedIn: 'root'
})
export class BookMapperService {

  constructor() { }

  mapNewBookDataToDto(newBookData: NewBookData) {
    return {name: newBookData.name, isbn: newBookData.isbn}
  }
}
