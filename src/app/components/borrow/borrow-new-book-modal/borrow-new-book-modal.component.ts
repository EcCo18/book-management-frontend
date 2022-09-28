import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-borrow-new-book',
  templateUrl: './borrow-new-book-modal.component.html',
  styleUrls: ['./borrow-new-book-modal.component.css']
})
export class BorrowNewBookModalComponent implements OnInit {

  @Output()
  passEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

  confirmModal(): void {
    this.passEvent.emit();
    this.activeModal.dismiss();
  }
}
