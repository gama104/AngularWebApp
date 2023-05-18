import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' }, // Add this line
  { path: 'signin', component: SigninComponent },
  // Other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }