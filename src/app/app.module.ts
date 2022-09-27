import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { BorrowComponent } from './components/borrow/borrow.component';
import { BorrowedBooksComponent } from './components/borrowed-books/borrowed-books.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { CreateBookComponent } from './components/create-book/create-book.component';
import { CreateBookModalComponent } from './components/create-book/create-book-modal/create-book-modal.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AdminComponent,
    BorrowComponent,
    BorrowedBooksComponent,
    LoginComponent,
    CreateBookComponent,
    CreateBookModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
