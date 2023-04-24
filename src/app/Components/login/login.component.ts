import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import{FormGroup} from '@angular/forms'
import ValidateForm from 'src/app/helper/validateform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa fa-eye-slash';
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Send the object to database
      this.auth.login(this.loginForm.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          alert(res.message);
          this.loginForm.reset();
          this.router.navigate(['dashboard']);
        },
        error: (err) => {
          alert(err?.console.error(err.message));
        },
      });
    } else {
      //Give an error using toastr and required feild
      // ValidateForm.validateAllFormsFeilds (this.loginForm);
      //alert("Form is INvalid");
     ValidateForm.validateAllFormFileds(this.loginForm);
      alert('Invalid Form')
    }
  }
  //Method after click on submit button is in Helper folder

}
