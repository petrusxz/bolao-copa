import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {

  private signUpForm: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private afAuth: AngularFireAuth) {
    this.validationSetup();
  }

  validationSetup(): void {
    const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.signUpForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.pattern(emailValidator), Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      passwordConfirmation: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    }, { validator: checkPassword });
  }

  validateFields(): boolean {
    if (!this.signUpForm.valid) {
      Object.keys(this.signUpForm.controls).forEach(field => {
        const control = this.signUpForm.get(field);
        control.markAsTouched({ onlySelf: true });        
      });

      if (this.signUpForm.invalid)
        this.signUpForm.markAsPending();
      return false;
    }
    return true;
  }

  signUp(): void {
    if (!this.validateFields())
      return;

    let newUser: {email: string, password: string} = this.signUpForm.value;

    this.afAuth.auth.createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((response: firebase.User) => {
        response.sendEmailVerification();

        console.log('User created.');
      }).catch(error => {
        console.error(error.message);
      });
  }
}

const checkPassword = (control: AbstractControl): { [key: string]: boolean } => {
  let pass = control.get('password');
  let passConfirm = control.get('passwordConfirmation');

  if (!pass || !passConfirm)
    return null;

  return pass.value === passConfirm.value ? null : { nomatch: true };
}