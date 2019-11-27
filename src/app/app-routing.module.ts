import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InloggenComponent} from './login/inloggen.component';
import {RegistrationComponent} from './registration/registration.component';
import {RekeningoverzichtComponent} from './rekeningoverzicht/rekeningoverzicht.component';
import {RekeningComponent} from './rekening/rekening.component';
import {TransactionComponent} from './transaction/transaction.component';
import {AddBankComponent} from './add-bank/add-bank.component';


const routes: Routes = [
    {path: 'registration', component: RegistrationComponent},
    {path: 'login', component: InloggenComponent},
    {path: 'overzicht/rekeningen', component: RekeningoverzichtComponent},
    {path: 'rekening/:id/details/:tableid', component: RekeningComponent},
    {path: 'transactie/:id/details', component: TransactionComponent},
    {path: 'bank-koppelen', component: AddBankComponent},
    { path: '**', redirectTo: 'overzicht/rekeningen', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
