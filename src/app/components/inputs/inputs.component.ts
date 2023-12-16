import { Component, forwardRef, ChangeDetectionStrategy, Input } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputsComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InputsComponent implements ControlValueAccessor {
  @Input() placeholder?: string;
  @Input() text?: string;
  @Input() title?: string;
  @Input() type?: string;
  @Input() name?: string;

  value = new FormControl('');
  disabled?: boolean;

  onChange!: (value: string) => void;
  onTouched!: () => void;

  writeValue(value: string): void {
    if (value) {
      this.value.setValue(value);
    }
    if (value === null) {
      this.value.reset();
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

  fillValue($event: Event): void {
    const e = $event.target as HTMLInputElement;
    this.onChange(e.value);
    this.onTouched();
  }
}
