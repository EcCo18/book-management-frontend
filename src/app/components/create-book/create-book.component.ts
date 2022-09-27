import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { CreateBookModalComponent } from "./create-book-modal/create-book-modal.component";
import NewBookData from "../../models/NewBookData";
import { BookService } from "../../services/book-service/book.service";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  private closeResult = '';

  constructor(
    private modalService: NgbModal,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
  }

  openModal() {
    const modalRef =
      this.modalService.open(
        CreateBookModalComponent,
        {ariaLabelledBy: 'modal-basic-title'}
      );
    this.subscribeToModalData(modalRef);
  }

  private subscribeToModalData(modalRef: NgbModalRef): void {
    modalRef.componentInstance.passEvent.subscribe((data: NewBookData) => {
      this.bookService.postNewBook(data);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
