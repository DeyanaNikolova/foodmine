import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css'
})
export class TextInputComponent {
@Input()
control!: AbstractControl;
@Input()
showErrorsWhen: boolean = true;
@Input()
label!: string;
@Input()
type: 'text' | 'password' | 'email' = 'text';

}
