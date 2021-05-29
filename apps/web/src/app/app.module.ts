import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule } from '@pokemon/api';
import { AppComponent } from './app.component';
import { UiModule } from '@pokemon/ui';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ApiModule, UiModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
