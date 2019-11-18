import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {InloggenComponent} from './inloggen/inloggen.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        InloggenComponent,
        RegistrationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule.forRoot([
            {path: 'registration', component: RegistrationComponent}
        ])
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
