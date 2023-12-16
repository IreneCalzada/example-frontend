import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() form?: any;
  @Output() newDataEvent = new EventEmitter<any>();

  sendForm(): void {
    this.newDataEvent.emit(this.form.value);
  }
}
