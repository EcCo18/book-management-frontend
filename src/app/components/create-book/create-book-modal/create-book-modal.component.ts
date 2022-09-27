import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import NewBookData from "../../../models/NewBookData";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-book-modal',
  templateUrl: './create-book-modal.component.html',
  styleUrls: ['./create-book-modal.component.css']
})
export class CreateBookModalComponent implements OnInit {

  @Output()
  passEvent: EventEmitter<any> = new EventEmitter<any>();
  newBookData: NewBookData;
  form: FormGroup;

  constructor(public activeModal: NgbActiveModal) {
    this.newBookData = {name: "", isbn:""};
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      isbn: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  passDataFromModal(): void {
    console.log(this.form.value)
    this.passEvent.emit(this.form.value);
    this.activeModal.dismiss();
  }

}
