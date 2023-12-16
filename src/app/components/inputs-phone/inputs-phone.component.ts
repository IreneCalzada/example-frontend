import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-inputs-phone',
  templateUrl: './inputs-phone.component.html',
  styleUrls: ['./inputs-phone.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputsPhoneComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class InputsPhoneComponent implements ControlValueAccessor {
  inputValue = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[0-9]{10}$/),
  ]);
  disabled?: boolean;
  @Input() title?: string;
  onChange!: (value: string) => void;
  onTouched!: () => void;

  writeValue(value: string): void {
    if (value) {
      this.inputValue.setValue(value);
    }
    if (value === null) {
      this.inputValue.reset();
    }
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  fillValue($event: Event) {
    const e = $event.target as HTMLInputElement;
    this.onChange(e.value);
    this.onTouched();
  }
}
