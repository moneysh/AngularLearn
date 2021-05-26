import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from "./components/productcomponent/app.product.component";
import { DropDownComponent } from './directives/componentsirective/app.dropdown.component';
import { ProductFormComponent } from './components/productformcomponent/app.productform.component';
import { ColorDirective } from './directives/attributedirective/app.color.directive';

import { StringUtiities } from "./services/app.utility.service";
import { UtilityComponent } from './components/utilityservicecomponent/app.utility.component';
import { UtilityLibModule } from 'src/library/app.library.module';
import { SimpleComponent } from 'src/library/messagecomponent/app.simple.component';
import { CategorySenderComponent } from './components/communicationcomponents/app.categorysender.component';
import { ProductReceiverComponent } from './components/communicationcomponents/app.productreceiver.component';
import { HttpServieComponent } from './components/httpservicecomponent/app.httpservice.comppnent';
// The AppModule class is decoared with @NgModule, to set the behavior of AppMOdule as 'Angular-MOdule'
// aka 'the container for all Angular Standard object'

@NgModule({
  declarations: [
    AppComponent, ProductComponent, DropDownComponent,
     ProductFormComponent, ColorDirective,
     UtilityComponent,
     CategorySenderComponent, ProductReceiverComponent,
     HttpServieComponent
  ],
   
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,HttpClientModule,
    AppRoutingModule, UtilityLibModule
  ],
  // registering the service as singleton instance
  // providers is a DI container
  // is making the Service Instance available to Components from
  // different Module
 // providers: [StringUtiities],
  bootstrap: [ProductFormComponent]
})
export class AppModule { }
