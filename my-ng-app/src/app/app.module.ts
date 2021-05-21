import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from "./components/productcomponent/app.product.component";
import { DropDownComponent } from './directives/componentsirective/app.dropdown.component';
import { ProductFormComponent } from './components/productformcomponent/app.productform.component';
import { ColorDirective } from './directives/attributedirective/app.color.directive';

// The AppModule class is decoared with @NgModule, to set the behavior of AppMOdule as 'Angular-MOdule'
// aka 'the container for all Angular Standard object'

@NgModule({
  declarations: [
    AppComponent, ProductComponent, DropDownComponent,
     ProductFormComponent, ColorDirective
  ],
   
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProductFormComponent]
})
export class AppModule { }
