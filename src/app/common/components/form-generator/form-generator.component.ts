import { Component, computed, inject, input, signal } from '@angular/core';
import { FormConfigType } from '../../../model/FormConfig.model';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ɵInternalFormsSharedModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import {
  type MatChipInputEvent,
  MatChipsModule,
} from '@angular/material/chips';
import {
  MatAutocompleteModule,
  type MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ChipsComponent } from '../chips/chips.component';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrl: './form-generator.component.css',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatIconModule,
    ɵInternalFormsSharedModule,
    MatAutocompleteModule,
    MatChipsModule,
    ChipsComponent,
    RadioButtonComponent,
    CheckboxComponent,
  ],
})
export class FormGeneratorComponent {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  formConfig = input.required<FormConfigType[]>();
  inputformGroup = input.required<FormGroup>();
}
