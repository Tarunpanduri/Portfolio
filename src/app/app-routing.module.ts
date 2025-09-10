import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { V2aboutComponent } from './components/v2about/v2about.component';
import { V2homeComponent } from './components/v2home/v2home.component';


const routes: Routes = [
    { path: '', component: V2aboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
