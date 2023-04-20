import { FormControl, FormGroup } from "@angular/forms";


export default class ValidateForm{
    static validateAllFormsFeilds(formGroup : FormGroup){
        Object.keys(formGroup.controls).forEach(feild =>{
          const control = formGroup.get(feild);
          if(control instanceof FormControl){
            control.markAsDirty({onlySelf:true});
          }else if(control instanceof FormGroup){
            this.validateAllFormsFeilds(control)
          }
        })
      }
}