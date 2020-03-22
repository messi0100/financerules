import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SignInComponent } from 'src/app/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from 'src/app/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from 'src/app/components/verify-email/verify-email.component';
import { OurworkComponent } from './ourwork/ourwork.component'; 
import { AboutusComponent} from './aboutus/aboutus.component';
import { AboutUsComponent} from './about-us/about-us.component';
import { Pricing2Component} from './pricing2/pricing2.component';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  { path: 'ourwork', component: OurworkComponent },
  {path: 'sign-up', component: SignUpComponent},


  { path: 'sign-in', component: SignInComponent, },
  { path: 'register-user', component: SignUpComponent, },
  { path: 'dashboard', component: DashboardComponent,  },
  { path: 'forgot-password', component: ForgotPasswordComponent, },
  { path: 'verify-email-address', component: VerifyEmailComponent,  },
  { path: 'contactus', component: ContactusComponent,  },
  { path: 'aboutus', component: AboutusComponent  ,},
  { path: 'about-us', component: AboutUsComponent  ,},
  { path: 'pricing2', component: Pricing2Component  }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule] 
})

export class PagesRoutingModule { }
