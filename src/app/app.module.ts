import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { BasketsReducer } from './state/baskets/baskets.reducer';
import { Reducers } from './state/reducers';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(Reducers.baskets, {})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
