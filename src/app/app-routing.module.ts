import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverzichtComponent} from './overzicht/overzicht.component';


const routes: Routes = [{
  path: '',     component: OverzichtComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
