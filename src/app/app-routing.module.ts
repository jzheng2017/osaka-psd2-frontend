import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TransactieoverzichtComponent} from './transactieoverzicht/transactieoverzicht.component';


const routes: Routes = [{
  path: '',     component: TransactieoverzichtComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
