import { Injectable } from '@angular/core';
import { AddItem } from '../add-item';
import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from '../button/button.component';
import { TextboxComponent } from '../textbox/textbox.component';
import { TableComponent } from '../table/table.component';
import { FooterComponent } from '../footer/footer.component';

@Injectable({
  providedIn: 'root'
})
export class LoadComponentsService {

  constructor() { }
  getComponentLists() {
    return [
      new AddItem(HeaderComponent, {name: 'Header'}),
      new AddItem(ButtonComponent, {name: 'Button'}),
      new AddItem(TextboxComponent, {name: 'TextBox'}),
      new AddItem(TableComponent, {name: 'Table'}),
      new AddItem(FooterComponent, {name: 'Footer'})
    ];
  }
}
