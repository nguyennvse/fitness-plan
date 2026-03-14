import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, Form, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormConfigType } from '../../../model/FormConfig.model';

@Component({
  selector: 'app-checkbox',
  imports: [MatCheckboxModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  private _value: any;
  isDisabled: boolean = false;
  valueList = input.required<string[]>();
  formConfig = input.required<FormConfigType>();
  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

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
    this.isDisabled = isDisabled;
  }

  checkboxChange(event: any, option: string) {
    if (event.checked) {
      this._value = [...(this._value || []), option];
    } else {
      this._value = (this._value || []).filter(
        (item: string) => item !== option,
      );
    }
    this.onChange(this._value);
    this.onTouched();
  }
}
