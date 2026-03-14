import { Component } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
@Component({
  selector: 'app-slider',
  imports: [MatSliderModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent implements ControlValueAccessor {
  value: number | null = null;
  disabled = false;
  private onChange: (value: number | null) => void = () => {};
  private onTouched: () => void = () => {};

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
