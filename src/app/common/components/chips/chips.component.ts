import { Component, computed, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormConfigType } from '../../../model/FormConfig.model';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-chips',
  imports: [
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChipsComponent),
      multi: true,
    },
  ],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.css',
})
export class ChipsComponent implements ControlValueAccessor {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  private _value: any[] = [];
  defaultValue = input.required<string>();
  chipList = input.required<string[]>();
  textValue = signal<string>('');
  formConfig = input<FormConfigType>();
  isDisabled = false;
  selectedChips = signal<string[]>([]);
  filteredChipList = computed(() => {
    const originalList = [...this.chipList()];
    const textValue = this.textValue().toLowerCase();
    return originalList.filter((item) =>
      item.toLowerCase().includes(textValue)
    );
  });

  private onChange: (value: string[]) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string[] | null): void {
    this._value = value || [];
  }
  registerOnChange(fn: (value: string[]) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.selectedChips.update((chip) => [...chip, value]);
    }

    // Clear the input value
    this.textValue.set('');
    console.log('selectedChips', this.selectedChips());
    this.onChange(this.selectedChips());
    this.onTouched();
  }

  remove(chip: string): void {
    this.selectedChips.update((chips) => {
      const index = chips.indexOf(chip);
      if (index < 0) {
        return chips;
      }

      chips.splice(index, 1);
      // this.announcer.announce(`Removed ${chip}`);

      return [...chips];
    });
    this.onChange(this.selectedChips());
    this.onTouched();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedChips.update((chips) => [...chips, event.option.viewValue]);
    this.textValue.set('');
    this.onChange(this.selectedChips());
    this.onTouched();
    event.option.deselect();
  }
}
