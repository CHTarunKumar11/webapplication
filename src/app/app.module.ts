import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(
      {
        timeOut : 2000,
        progressBar : true,
        progressAnimation : 'increasing',
        closeButton : true,
        positionClass : "toast-top-center",
        preventDuplicates : true
      }
    ),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
