import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputEmailComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.Default,
})

export class InputEmailComponent implements ControlValueAccessor {
  inputEmail = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  disabled?: boolean;
  @Input() title?: string;
  onChange!: (value: string) => void;
  onTouched!: () => void;

  writeValue(value: string): void {
    if (value) {
      this.inputEmail.setValue(value);
    }
    if (value === null) {
      this.inputEmail.reset();
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
