import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { OurworkComponent } from './ourwork/ourwork.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Newpage2Component } from './newpage2/newpage2.component';
import { SignInComponent } from 'src/app/components/sign-in/sign-in.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from 'src/app/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from 'src/app/components/verify-email/verify-email.component';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';
@NgModule({
  declarations: [ OurworkComponent, VerifyEmailComponent, LoginComponent, ForgotPasswordComponent, DashboardComponent, RegisterComponent, Newpage2Component, SignInComponent, SignUpComponent],
  imports: [
    CommonModule, 
    HomeModule,
    PagesRoutingModule,
    
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),    

  ],

  providers: [
    AuthService
  ],
})
export class PagesModule { }
