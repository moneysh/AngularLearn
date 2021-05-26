import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './components/createproductcomponent/app.createproduct.component';
import { ProductListComponent } from './components/productslistcomponent/app.productlist.component';
import { MainComponent } from './components/app.main.component';

// import NGRX Object Model

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { mainReducer } from "./reducers/index";
import {  StoreDevtoolsModule } from "@ngrx/store-devtools";
import { ProductEffect } from "./effects/app.product.effect";
// import environment object to simulate the NGRX store
import { environment } from "./../environments/environment";

@NgModule({
  declarations: [
    AppComponent, ProductListComponent, CreateProductComponent,
    MainComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule, // load the RouterModuel with Route Table at root level
    // configure the MGRX Object model
    // configuring the Store at global level 
    StoreModule.forRoot(mainReducer),
    // cofigurign Effect at global level, since there could be multiple effect object
    // so thats why an array is used
    EffectsModule.forRoot([ProductEffect]), 
    // configuring simulator
    StoreDevtoolsModule.instrument({
      name: 'The NGRX App',
      logOnly: environment.production
    })

  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
