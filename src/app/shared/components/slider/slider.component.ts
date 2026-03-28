import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { FormConfigType } from '../../../model/FormConfig.model';
@Component({
  selector: 'app-slider',
  imports: [MatSliderModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderComponent),
      multi: true,
    },
  ],
})
export class SliderComponent implements ControlValueAccessor {
  value: number | null = null;
  disabled = false;
  formConfig = input.required<FormConfigType>();
  private onChange: (value: number | null) => void = () => {};
  private onTouched: () => void = () => {};

  ngAfterViewInit() {
    console.log('formConfig', this.formConfig());
  }
  writeValue(obj: any): void {
    this.value = obj;
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

  onSliderChange(event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
