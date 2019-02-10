import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { HomePage } from './home.page';
import {CandidateCardPage } from "../candidate-card/candidate-card.page"
const routes: Routes = [
  {
    path: 'candidate-card',
    loadChildren: './candidate-card/candidate-card.module#CandidateCardPageModule'
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
