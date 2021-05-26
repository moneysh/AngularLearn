import { NgModule } from '@angular/core';

// RouterModule: the platform for Single PAge Application
// Routes: The Route Table which contains an array of Route
// Route: A Single Expression in the Route table
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/createproductcomponent/app.createproduct.component';
import { ProductListComponent } from './components/productslistcomponent/app.productlist.component';

// Route Expression
// {path:<UTL>, component:<NAME-OF-COMPONENT>, children:<ROUTE>, loadChildren:<LAZY-LOADING>, redirectTo:<URL-TO-REDIRCT-IF-URL-DOES-NOT-MATCH>, canActivate: <GRADGED-ROUTES-AKA-USER/ROLE-BASED-ROUTING>}
const routes: Routes = [
  {path:'', component:ProductListComponent}, // default path
  {path:'create', component:CreateProductComponent},
  {path:'**', redirectTo:''} // if path not match or dirty path entered by enduser then go to default 
];
// RouterModule.forRoot(routes)
 // the RouteTable will be registered at root of the application where the 'AppRoutingModule' is imported
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // exports the current RouterModule and hence export the Route Table
})
export class AppRoutingModule { }
