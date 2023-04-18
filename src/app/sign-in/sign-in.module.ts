import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in.component';

@NgModule({
    declarations: [SignInComponent],
    imports: [FormsModule],
    exports: [SignInComponent],
  })
  export class SignInModule { }