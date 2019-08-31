import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from "./password-validator.component";

@Component({
  selector: "app-validation-forms",
  templateUrl: "./validation-forms.component.html",
  styleUrls: ["./validation-forms.component.css"]
})
export class ValidationFormsComponent implements OnInit {
  private registerForm: FormGroup;
  private register = false;

  private loginForm: FormGroup;
  private login = false;

  private typeForm: FormGroup;
  private type = false;

  private rangeForm: FormGroup;
  private range = false;

  private focusTouched;
  private focusTouched1;
  private focusTouched2;
  private focusTouched3;
  private focusTouched4;
  private focusTouched5;
  private focusTouched6;
  private focusTouched7;
  private focusTouched8;
  private focusTouched9;
  private focusTouched10;
  private focusTouched11;
  private focusTouched12;
  private focusTouched13;
  private focusTouched14;
  private focusTouched15;
  private focusTouched16;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
        this.loginForm = this.formBuilder.group({
          fullName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
        });
        this.typeForm = this.formBuilder.group({
          requiredText: ['', [Validators.required, Validators.minLength(2)]],
          email: ['', [Validators.required, Validators.email]],
          number: ['', [Validators.required, Validators.pattern("^-?[0-9]+$")]],
          url: ['', [Validators.required, Validators.pattern(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i)]],
          idSource: ['', [Validators.required, Validators.minLength(2)]],
          idDestination: ['', Validators.required]
          }, {
              validator: MustMatch('idSource', 'idDestination')
            });
          this.rangeForm = this.formBuilder.group({
            minLength: ['', [Validators.required, Validators.minLength(5)]],
            maxLength: ['', [Validators.required, Validators.maxLength(5)]],
            rangeD: ['', [Validators.required, Validators.min(6), Validators.max(10), Validators.pattern("^-?[0-9]+$")]],
            minValue: ['', [Validators.required, Validators.min(6), Validators.pattern("^-?[0-9]+$")]],
            maxValue: ['', [Validators.required, Validators.max(6), Validators.pattern("^-?[0-9]+$")]]
          })
    }

    // convenience getter for easy access to form fields
    // Register form functions
    get registerF() {
      return this.registerForm.controls;
    }

    onRegister() {
        this.register = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }
    // Login form functions
    get loginF() {
      return this.loginForm.controls;
    }

    onLogin() {
        this.login = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
    }

    // Type form functions
    get typeF() {
      return this.typeForm.controls;
    }

    onType() {
        this.type = true;

        // stop here if form is invalid
        if (this.typeForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.typeForm.value))
    }

    // Range form functions
    get rangeF() {
      return this.rangeForm.controls;
    }

    onRange() {
        this.range = true;

        // stop here if form is invalid
        if (this.rangeForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.rangeForm.value))
    }
}
