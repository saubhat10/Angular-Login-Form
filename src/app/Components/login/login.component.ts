import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import ValidateForm from 'src/app/helper/validateform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  type: string = "password"
  isText: boolean = false;
  eyeIcon: string = "fa fa-eye-slash";
  loginForm!:FormGroup;
  constructor (private fb: FormBuilder){}

ngOnInit():void{
  this.loginForm = this.fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required]
  })
}

hideShowPass(){
this.isText = !this.isText;
this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash"
this.isText ? this.type = "text" : this.type = "password"; 
}

onSubmit(){
  if(this.loginForm.valid){
    console.log(this.loginForm.value)
    // Send the object to database

  }
  else{
    
    //Give an error using toastr and required feild
    ValidateForm.validateAllFormsFeilds (this.loginForm);
    //alert("Form is INvalid");
  }
}



}
