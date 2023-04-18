import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PostComponent } from './post/post.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"admin" , component:AdminComponent},
  {path:"signIn", component:SignInComponent},
   {path:"post", component:PostComponent},
   {path:"Update", component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
