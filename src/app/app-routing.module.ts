import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InloggenComponent} from './inloggen/inloggen.component';
import {RegistrationComponent} from './registration/registration.component';
import {RekeningoverzichtComponent} from './rekeningoverzicht/rekeningoverzicht.component';
import {TransactieoverzichtComponent} from './transactieoverzicht/transactieoverzicht.component';


const routes: Routes = [
    {path: 'registration', component: RegistrationComponent},
    {path: 'inloggen', component: InloggenComponent},
    {path: 'rekeningoverzicht', component: RekeningoverzichtComponent},
    {path: 'transactieoverzicht', component: TransactieoverzichtComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
