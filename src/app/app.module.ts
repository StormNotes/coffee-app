import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CapComponent } from './cap/cap.component';
import { MenuDescComponent } from './menu-desc/menu-desc.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
   declarations: [
      AppComponent,
      CapComponent,
      MenuDescComponent,
      ButtonsComponent,
      MenuComponent,

   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
