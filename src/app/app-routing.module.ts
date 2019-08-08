import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/app/login/login.component';
import { AccountComponent } from 'src/app/account/account.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'login', component: LoginComponent},
  { path: 'account', component: AccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }