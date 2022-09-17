import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordGenerateComponent } from './components/password-generate/password-generate.component';
import { TypingMasterComponent } from './components/typing-master/typing-master.component';

const routes: Routes = [
  { path: 'password-generate', component: PasswordGenerateComponent },
  { path: 'typing-master', component: TypingMasterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
