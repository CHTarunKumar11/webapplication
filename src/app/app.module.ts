import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RemaindersComponent } from './remainders/remainders.component';
import { AuthorizationService } from './authorization.service';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpwdComponent,
    DashboardComponent,
    RemaindersComponent
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
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthorizationService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
