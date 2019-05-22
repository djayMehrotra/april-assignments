import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WellListComponent } from './well-list/well-list.component';
import { WellComponent } from './well/well.component';

@NgModule({
  declarations: [
    AppComponent,
    WellListComponent,
    WellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
