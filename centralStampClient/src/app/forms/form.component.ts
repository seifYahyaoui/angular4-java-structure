/**
 * Created by seif on 6/12/17.
 */

import {Component} from "@angular/core";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
//
// @Component({
//   selector: 'form-cmp',
//   template: `<div>
// <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
//
// <input type="text" name="name" ngModel>
// <input type="text" name="address" ngModel>
//
// <button type="submit">Submit</button>
// </form>
//
// </div>`
// })
// export class FormComponent {
//
//   onSubmit(form: any) {
//     console.log('form : ', form);
//   }
//
// }











// @Component({
//   selector: 'form-cmp',
//   template: `
//
// <form [formGroup] ="form" (ngSubmit)="onSubmit(form.value)">
//
// <input type="text" id="name" [formControl]="form.controls['name']">
// <input type="text" id="address" [formControl]="form.controls['address']">
// <!--<input type="text" id="address" formControlName="address"> -->
// <button type="submit">Submit</button>
// </form>
// `
// })
// export class FormComponent {
//
//   form: FormGroup;
//
//   constructor() {
//     this.form = new FormGroup({
//       name: new FormControl("Nate"),
//       address: new FormControl("90210")
//     })
//   }
//
//   onSubmit(form: any) {
//     console.log('form : ', form);
//   }
// }







@Component({
  selector: 'form-cmp',
  template: `<div>
<form [formGroup] ="form" (ngSubmit)="onSubmit(form.value)">

<div *ngIf="form.controls['name'].hasError('invalidName') && form.controls['name'].touched">invalidName</div>
<div *ngIf="form.controls['name'].hasError('required') && form.controls['name'].touched">required</div>

<div *ngIf="!form.controls['name'].valid && form.controls['name'].touched">valid</div>
<input type="text" id="name" [formControl]="form.controls['name']">
<input type="text" id="address" [formControl]="form.controls['address']">

<button type="submit">Submit</button>
</form>

</div>`
})
export class FormComponent {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        'name': ['123seif',Validators.compose([Validators.required,this.customValidationName])],
        'address': ['ben arous']
      }
    );

    this.form.controls['name'].valueChanges.subscribe(
      (value: string) => {
        console.log('the name changed to:', value);
      }
    );
  }

  customValidationName(field : FormControl): {[key:string]: boolean}{
    if(!field.value.match(/^123/)){
      return {invalidName : true};
    }
  }

  onSubmit(form: any) {
    console.log('form : ', form);
  }
}





