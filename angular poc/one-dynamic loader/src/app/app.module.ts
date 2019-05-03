import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { TextboxComponent } from './textbox/textbox.component';
import { HeaderComponent } from './header/header.component';
import { ListComponents } from './list/list.component';
import { ContainerComponent } from './container/container.component';
import { AppRoutingModule } from './app-routing.module';
import { AdDirective } from './directive/ad.directive';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TextboxComponent,
    HeaderComponent,
    ListComponents,
    ContainerComponent,
    AdDirective,
    TableComponent,
    FooterComponent
  ],
  entryComponents: [ 
    HeaderComponent,
    TextboxComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
