import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {InloggenComponent} from './inloggen/inloggen.component';
import {RegistrationComponent} from './registration/registration.component';


const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'inloggen', component: InloggenComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
