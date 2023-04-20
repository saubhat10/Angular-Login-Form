import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl , FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helper/validateform';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
 // [x: string]: any;
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa fa-eye-slash';
  signUpForm! : FormGroup;  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      userName: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }
onSignup(){
  if(this.signUpForm.valid){
    console.log(this.signUpForm.value)
  }else{
    ValidateForm.validateAllFormsFeilds(this.signUpForm);
    alert("Invalid")
  }
}
  }
  
//  private validateAllFormsFeilds(formGroup : FormGroup){
//    Object.keys(formGroup.controls).forEach(feild =>{
//      const control = formGroup.get(feild);
//      if(control instanceof FormControl){
//        control.markAsDirty({onlySelf:true});
//      }else if(control instanceof FormGroup){
//        this.validateAllFormsFeilds(control)
//      }
//    })
//  }

