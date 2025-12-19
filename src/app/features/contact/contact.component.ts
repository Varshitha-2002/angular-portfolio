import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['']
  });

  constructor(private fb: FormBuilder) {}

  submit() {
    console.log(this.contactForm.value);
    alert('Message submitted!');
  }
}
