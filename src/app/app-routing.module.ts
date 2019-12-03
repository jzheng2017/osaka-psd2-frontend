import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InloggenComponent} from './login/inloggen.component';
import {RegistrationComponent} from './registration/registration.component';
import {RekeningoverzichtComponent} from './rekeningoverzicht/rekeningoverzicht.component';
import {RekeningComponent} from './rekening/rekening.component';
import {TransactionComponent} from './transaction/transaction.component';
import {AddBankComponent} from './add-bank/add-bank.component';
import {AuthGuardService} from './service/auth/auth-guard.service';
import {RekeningSettingsComponent} from './rekening-settings/rekening-settings.component';
import {TransferComponent} from './transfer/transfer.component';


const routes: Routes = [
    {path: 'registration', component: RegistrationComponent},
    {path: 'login', component: InloggenComponent},
    {path: 'rekening/:id/details/:tableid', component: RekeningComponent, canActivate: [AuthGuardService]},
    {path: 'overzicht/rekeningen', component: RekeningoverzichtComponent, canActivate: [AuthGuardService]},
    {path: 'rekening/:id/details', component: RekeningComponent, canActivate: [AuthGuardService]},
    {path: 'transactie/:id/details', component: TransactionComponent, canActivate: [AuthGuardService]},
    {path: 'bank-koppelen', component: AddBankComponent, canActivate: [AuthGuardService]},
    {path: 'rekening/:id/instellingen', component: RekeningSettingsComponent, canActivate: [AuthGuardService]},
    {path: 'overmaken', component: TransferComponent, canActivate: [AuthGuardService]},
    {path: '**', redirectTo: 'overzicht/rekeningen', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
