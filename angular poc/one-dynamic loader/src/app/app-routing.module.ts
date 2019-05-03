import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { TextboxComponent } from './textbox/textbox.component';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'textbox', component: TextboxComponent },
  { path: 'table', component: TableComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
