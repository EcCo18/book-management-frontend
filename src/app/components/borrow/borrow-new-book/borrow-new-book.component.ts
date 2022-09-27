import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-borrow-new-book',
  templateUrl: './borrow-new-book.component.html',
  styleUrls: ['./borrow-new-book.component.css']
})
export class BorrowNewBookComponent implements OnInit {

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
