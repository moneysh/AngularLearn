import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from "./components/productcomponent/app.product.component";
import { DropDownComponent } from './directives/componentsirective/app.dropdown.component';

// The AppModule class is decoared with @NgModule, to set the behavior of AppMOdule as 'Angular-MOdule'
// aka 'the container for all Angular Standard object'

@NgModule({
  declarations: [
    AppComponent, ProductComponent, DropDownComponent
  ],
   
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
