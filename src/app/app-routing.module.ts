import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {RekeningoverzichtComponent} from './rekeningoverzicht/rekeningoverzicht.component';
import {RekeningComponent} from './rekening/rekening.component';
import {TransactionComponent} from './transaction/transaction.component';
import {TransactionCategorizeComponent} from './transaction-categorize/transaction-categorize.component';
import {AddBankComponent} from './add-bank/add-bank.component';
import {AuthGuardService} from './service/auth/auth-guard.service';
import {RekeningSettingsComponent} from './rekening-settings/rekening-settings.component';
import {TransferComponent} from './transfer/transfer.component';
import {InstellingenComponent} from './instellingen/instellingen.component';

const routes: Routes = [
    {path: 'registration', component: RegistrationComponent},
    {path: 'login', component: LoginComponent},
    {path: 'rekening/:id/details/:tableid', component: RekeningComponent, canActivate: [AuthGuardService]},
    {path: 'overzicht/rekeningen', component: RekeningoverzichtComponent, canActivate: [AuthGuardService]},
    {path: 'rekening/:id/details', component: RekeningComponent, canActivate: [AuthGuardService]},
    {path: 'transactie/:id/:transactieId/:tableId/details', component: TransactionComponent, canActivate: [AuthGuardService]},
    {path: 'transactie/:id/:tableId/categorize', component: TransactionCategorizeComponent, canActivate: [AuthGuardService]},
    {path: 'bank-koppelen', component: AddBankComponent, canActivate: [AuthGuardService]},
    {path: 'rekening/:id/instellingen', component: RekeningSettingsComponent, canActivate: [AuthGuardService]},
    {path: 'overmaken', component: TransferComponent, canActivate: [AuthGuardService]},
    {path: 'instellingen', component: InstellingenComponent, canActivate: [AuthGuardService]},
    {path: '**', redirectTo: 'overzicht/rekeningen', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
