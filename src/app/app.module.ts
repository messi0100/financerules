import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AuthComponent } from './core/auth/auth.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UsersProfileComponent } from './users/users-profile/users-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UserLoginComponent,
    UsersProfileComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,  // Add this only in the root module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
