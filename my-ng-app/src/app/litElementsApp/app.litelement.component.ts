import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-litelement-component',
    template: `
       <h1>Using the LitElement in Angular Application</h1>
       <input type="button" value="Change Message" (click)="cheangeMessage()">
       <hr>
       Enter New Message <input type="text" [(ngModel)]="message" class="form-control">

       <simple-element [inputMessage]="message" [list]="values"
        on-lit-click="receiveMessage($event)"
          [fname]="'Mahesh'" [lname]="'Sabnis'"></simple-element>
        <hr/>
        <strong>
            {{receivedData}}
        </strong>
    `
})

export class LitElementComponent implements OnInit {
    message:string;
    receivedData:string;
    values:Array<string>;
    constructor() {
        this.message = 'Hi, I am your Angular Container Component!!!!';
        this.values =new Array<string>();
        this.values.push('A');
        this.values.push('B');
        this.values.push('C');
        this.values.push('D');
        this.values.push('E');
        this.receivedData = '';
     }

    ngOnInit() { }
    receiveMessage(event:any):void {
        this.receivedData = event.detail.data;
    }
    cheangeMessage():void {
        this.message = 'Hi!! LitElement, Take this new Message';
    }
}