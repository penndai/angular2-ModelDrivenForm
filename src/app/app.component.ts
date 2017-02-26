import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateEmail } from './email.validator';
import { validatePasswordMatch } from './email.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Model Driven Form Works!';

  userForm = new FormGroup({
    namecontrol: new FormControl(null, Validators.required),
    emailcontrol: new FormControl(null, [ validateEmail]),
    confirmpassword: new FormControl(null),
    password: new FormControl(null),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$'))
    }),
  }, validatePasswordMatch('password', 'confirmpassword'));

  OnSubmit() {
    console.log(this.userForm.value);
  }

 
  //   validateEmail(c: FormControl) {
  //     let email_regexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

  //     return email_regexp.test(c.value) ? null : {
  //         validateEmail: {
  //             valid: false
  //         }
  //     }
  // }
}
