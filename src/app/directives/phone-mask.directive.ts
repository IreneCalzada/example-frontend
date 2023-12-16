import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appPhoneMask]'
})
export class PhoneMaskDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])

  onModelChange(event: any) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])

  keydownBackspace(event: any) {
    this.onInputChange(event.target.value, true);
  }

  onInputChange(event: any, backspace: any) {
    let newVal = event?.replace(/\D/g, '');  //Busca los caraceteres que no son dígitos y los reemplaza con blancos

    if (backspace && newVal.length === 10) {
      newVal = newVal.substring(0, newVal.length - 1); // Elimina el último caracter
    }

    this.ngControl.valueAccessor?.writeValue(newVal);
  }
}
