import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InloggenComponent} from './inloggen/inloggen.component';


const routes: Routes = [
  { path: '',     component: InloggenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
