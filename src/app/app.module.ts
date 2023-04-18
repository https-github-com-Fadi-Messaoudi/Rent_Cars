import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavModule } from './nav/nav.module';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SignInComponent,
    SignUpComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    AdminComponent,
    PostComponent,
    UpdateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
