import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {InloggenComponent} from './login/inloggen.component';
import {RekeningoverzichtComponent} from './rekeningoverzicht/rekeningoverzicht.component';
import {TransactieoverzichtComponent} from './transactieoverzicht/transactieoverzicht.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {RekeningComponent} from './rekening/rekening.component';
import {HttpClientModule} from '@angular/common/http';
import {TransactionComponent} from './transaction/transaction.component';
import {AddBankComponent} from './add-bank/add-bank.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {RekeningSettingsComponent} from './rekening-settings/rekening-settings.component';
import {TransferComponent} from './transfer/transfer.component';
import {AngularIbanModule} from 'angular-iban';
import {InstellingenComponent} from './instellingen/instellingen.component';


@NgModule({
  declarations: [
    AppComponent,
    InloggenComponent,
    RegistrationComponent,
    RekeningoverzichtComponent,
    TransactieoverzichtComponent,
    RekeningComponent,
    TransactionComponent,
    AddBankComponent,
    RekeningSettingsComponent,
    TransferComponent,
    InstellingenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgxSpinnerModule,
    AngularIbanModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
