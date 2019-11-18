import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      RouterModule.forRoot([
        {path: 'registration', component: RegistrationComponent}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
