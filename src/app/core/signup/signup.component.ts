import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  validationForm: FormGroup | any;

  constructor(public modalRef: MdbModalRef<SignupComponent>) { }

  ngOnInit(): void {
    this.validationForm = new FormGroup({
      userName: new FormControl(null, { validators: Validators.required, updateOn: 'blur' }),
      Email: new FormControl(null, { validators: Validators.required, updateOn: 'blur' }),
      password: new FormControl(null, { validators: Validators.required, updateOn: 'blur' }),
      cPassword: new FormControl(null, { validators: Validators.required, updateOn: 'blur' }),
      country: new FormControl(null, { validators: Validators.required, updateOn: 'blur' }),
      city: new FormControl(null, { validators: Validators.required, updateOn: 'blur' }),
    });
  }

  get userName(): AbstractControl {
    return this.validationForm.get('userName');
  }

  get Email(): AbstractControl {
    return this.validationForm.get('Email');
  }

  get password(): AbstractControl {
    return this.validationForm.get('password');
  }

  get cPassword(): AbstractControl {
    return this.validationForm.get('cPassword');
  }

  get country(): AbstractControl {
    return this.validationForm.get('country');
  }

  get city(): AbstractControl {
    return this.validationForm.get('city');
  }



}
