import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactieoverzichtComponent } from './transactieoverzicht/transactieoverzicht.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactieoverzichtComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
