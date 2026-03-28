import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { FormConfigType } from '../../../model/FormConfig.model';

@Component({
  selector: 'app-radio-button',
  imports: [MatRadioModule],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true,
    },
  ],
})
export class RadioButtonComponent implements ControlValueAccessor {
  private _value: any;
  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};
  disabled: boolean = false;
  formConfig = input.required<FormConfigType>();
  optionList = input.required<{ label: string; value: any }[]>();
  writeValue(obj: any): void {
    this._value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  radioChange(event: any) {
    this._value = event.value;
    this.onChange(this._value);
    this.onTouched();
  }
}
