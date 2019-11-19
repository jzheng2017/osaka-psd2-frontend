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
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from "./service/in-memory-data.service";

@NgModule({
    declarations: [
        AppComponent,
        InloggenComponent,
        RegistrationComponent,
        RekeningoverzichtComponent,
        TransactieoverzichtComponent,
        RekeningComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false, delay: 500}
        ),
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})

export class AppModule {
}
