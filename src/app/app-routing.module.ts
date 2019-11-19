import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InloggenComponent} from './login/inloggen.component';
import {RegistrationComponent} from './registration/registration.component';
import {RekeningoverzichtComponent} from './rekeningoverzicht/rekeningoverzicht.component';
import {RekeningComponent} from './rekening/rekening.component';


const routes: Routes = [
    { path: '**', redirectTo: 'overzicht/rekeningen', pathMatch: 'full' },
    {path: 'registration', component: RegistrationComponent},
    {path: 'login', component: InloggenComponent},
    {path: 'overzicht/rekeningen', component: RekeningoverzichtComponent},
    {path: 'rekening/:id/details', component: RekeningComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
