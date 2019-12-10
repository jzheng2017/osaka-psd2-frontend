import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {InloggenComponent} from './login/inloggen.component';
import {RekeningoverzichtComponent} from './rekeningoverzicht/rekeningoverzicht.component';
import {TransactieoverzichtComponent} from './transactieoverzicht/transactieoverzicht.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {RekeningComponent} from './rekening/rekening.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TransactionComponent} from './transaction/transaction.component';
import {AddBankComponent} from './add-bank/add-bank.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {RekeningSettingsComponent} from './rekening-settings/rekening-settings.component';
import {TransferComponent} from './transfer/transfer.component';
import {AngularIbanModule} from 'angular-iban';
import {InstellingenComponent} from './instellingen/instellingen.component';
import {TransactionCategorizeComponent} from './transaction-categorize/transaction-categorize.component';
import {ConfigService} from './service/config/config.service';
import {catchError, map} from 'rxjs/operators';
import {Observable, ObservableInput, of} from 'rxjs';

function load(http: HttpClient, config: ConfigService): (() => Promise<boolean>) {
  return (): Promise<boolean> => {
    return new Promise<boolean>((resolve: (a: boolean) => void): void => {
      http.get('./assets/config.json')
        .pipe(
          map((x: ConfigService) => {
            config.baseUrl = x.baseUrl;
            resolve(true);
          }),
          catchError((x: { status: number }, caught: Observable<void>): ObservableInput<{}> => {
            if (x.status !== 404) {
              resolve(false);
            }
            config.baseUrl = 'http://localhost:8080';
            resolve(true);
            return of({});
          })
        ).subscribe();
    });
  };
}

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
    InstellingenComponent,
    TransactionCategorizeComponent
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
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: load,
      deps: [
        HttpClient,
        ConfigService
      ],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
