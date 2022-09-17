import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordGenerateComponent } from './components/password-generate/password-generate.component';
import { TypingMasterComponent } from './components/typing-master/typing-master.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordGenerateComponent,
    TypingMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
