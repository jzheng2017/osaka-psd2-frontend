import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RekeningoverzichtComponent } from './rekeningoverzicht/rekeningoverzicht.component';

@NgModule({
  declarations: [
    AppComponent,
    RekeningoverzichtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
