import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'new-candidate', loadChildren: './new-candidate/new-candidate.module#NewCandidatePageModule' },
  { path: 'candidate', loadChildren: './candidate/candidate.module#CandidatePageModule' },
  { path: 'interview-station', loadChildren: './interview-station/interview-station.module#InterviewStationPageModule' },
  { path: 'psifas-station', loadChildren: './psifas-station/psifas-station.module#PsifasStationPageModule' },
  { path: 'salary-station', loadChildren: './salary-station/salary-station.module#SalaryStationPageModule' },
  { path: 'forms-station', loadChildren: './forms-station/forms-station.module#FormsStationPageModule' },
  { path: 'hr-station', loadChildren: './hr-station/hr-station.module#HrStationPageModule' },
  { path: 'system-station', loadChildren: './system-station/system-station.module#SystemStationPageModule' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  




}
