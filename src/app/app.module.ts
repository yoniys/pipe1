import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Try1Pipe } from './p/try1.pipe';
import { CTry1Component } from './c/c-try1/c-try1.component';

@NgModule({
  declarations: [
    AppComponent,
    Try1Pipe,
    CTry1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
