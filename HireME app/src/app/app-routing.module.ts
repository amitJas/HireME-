import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'new-candidate', loadChildren: './new-candidate/new-candidate.module#NewCandidatePageModule' },
  { path: 'candidate-card', loadChildren: './candidate-card/candidate-card.module#CandidateCardPageModule' },
  { path: 'candidate-data', loadChildren: './candidate-data/candidate-data.module#CandidateDataPageModule' },
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  




}
