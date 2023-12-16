import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  form: FormGroup;
  content1: string = "ESTOY ACTIVA";
  content2: string = "NO ESTOY ACTIVA";
  tableData: any[] = [];
  tableData2: any[] = [];
  @Input() newData: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.maxLength(10)]],
      date: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.form.reset();
  }

  addData(): void {
    this.tableData.push(this.form.value);
  }

  sendTableData(event: any): void {
    this.tableData2.push(event);
    this.form.reset();
  }

  sendForm(): void {
    this.addData()
  }

  setContents(number: number): void {
    if (number == 1) {
      this.content1 = "ESTOY ACTIVA"
      this.content2 = "NO ESTOY ACTIVA"
    } else {
      this.content1 = "NO ESTOY ACTIVA"
      this.content2 = "ESTOY ACTIVA"
    }
  }
}
