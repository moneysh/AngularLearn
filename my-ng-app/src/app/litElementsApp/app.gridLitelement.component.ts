import { Component, OnInit } from '@angular/core';
import { Product } from "../models/app.product.model";

@Component({
    selector: 'app-gridelement-component',
    template: `
       <h1>Using the LitElement in Angular Application</h1>
       <input type="button" value="Change Message" (click)="cheangeMessage()">
       <hr>
       Enter New Message <input type="text" [(ngModel)]="message" class="form-control">

       <grid-element [inputMessage]="message" [products]="products" [headers] = "columnHeaders"></grid-element>
        <hr/>
        <strong>
            {{receivedData}}
        </strong>
    `
})

export class GridElementComponent implements OnInit {
    message:string;
    receivedData:string;
    products:Array<Product>;
    prd :Product ;
    columnHeaders : Array<string> ;
    constructor() {
        this.receivedData = '';
        this.message = 'Hi, I am your Angular Container Component!!!!';
        this.products = new Array<Product>();
        this.prd = new Product();
        this.prd.ProductRowId=101;
        this.prd.ProductId='Prd-001';
        this.prd.ProductName='Laptop';
        this.prd.CategoryName='Electronics'
        this.prd.Manufacturer = 'IBM';
        this.prd.Description='Gaming'; 
        this.prd.BasePrice=90000;
        this.columnHeaders = new Array<string>();
        this.columnHeaders = Object.keys(this.prd);

        this.products.push(this.prd);
        this.products.push(this.prd);
        this.products.push(this.prd);
     }

    ngOnInit() { }
    receiveMessage(event:any):void {
        this.receivedData = event.detail.data;
    }
    cheangeMessage():void {
        this.message = 'Hi!! LitElement, Take this new Message';
    }
}