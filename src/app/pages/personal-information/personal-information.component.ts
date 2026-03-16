import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  imports: [],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalInformationComponent {}
