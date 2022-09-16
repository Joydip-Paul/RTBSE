import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordGenerateComponent } from './components/password-generate/password-generate.component';

const routes: Routes = [
  { path: 'password-generate', component: PasswordGenerateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
