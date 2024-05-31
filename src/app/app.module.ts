import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './authentication/404/page-not-found/page-not-found.component';
import { RegisterComponent } from './authentication/register/register/register.component';
import { AnimatedComponent } from './animated/animated/animated.component';
import { LoginComponent } from './modules/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    RegisterComponent,
    AnimatedComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
