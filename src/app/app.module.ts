import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {InloggenComponent} from './login/inloggen.component';
import {RekeningoverzichtComponent} from './rekeningoverzicht/rekeningoverzicht.component';
import {TransactieoverzichtComponent} from './transactieoverzicht/transactieoverzicht.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {RekeningComponent} from './rekening/rekening.component';
import {HttpClientModule} from '@angular/common/http';
import { TransactionComponent } from './transaction/transaction.component';
import { AddBankComponent } from './add-bank/add-bank.component';
import { NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
    declarations: [
        AppComponent,
        InloggenComponent,
        RegistrationComponent,
        RekeningoverzichtComponent,
        TransactieoverzichtComponent,
        RekeningComponent,
        TransactionComponent,
        AddBankComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        NgxSpinnerModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})

export class AppModule {
}
