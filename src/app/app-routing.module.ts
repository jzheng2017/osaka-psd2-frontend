import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RekeningoverzichtComponent} from './rekeningoverzicht/rekeningoverzicht.component';


const routes: Routes = [
  {path: '',     component: RekeningoverzichtComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
