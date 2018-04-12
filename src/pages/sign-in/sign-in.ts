import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage {
  private signInForm: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private afAuth: AngularFireAuth) {
    this.validationSetup();
  }

  validationSetup(): void {
    const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.signInForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.pattern(emailValidator), Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  validateFields(): void {
    if (this.signInForm.invalid)
      this.signInForm.markAsPending();
  }

  signIn(): void {
    if (!this.signInForm.valid) {
      Object.keys(this.signInForm.controls).forEach(field => {
        const control = this.signInForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      this.validateFields();
      return;
    }

    let user: {email: string, password: string} = this.signInForm.value;

    this.afAuth.auth.signInWithEmailAndPassword(
      user.email,
      user.password
    ).then((response: firebase.User) => {
        if (!response.emailVerified) {
          console.log('Email verification is pending.');
          return;
        }
        console.log('Logged In.');
      }).catch(error => {
        console.log(error.message);
      });
  }
}
