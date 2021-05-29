import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-grid-component',
    templateUrl: './app.grid.view.html'
})

export class GridComponent{
    private _DataSource:Array<any>;
    private columnHeaders:Array<string>;
    private canDelete:boolean ;


    
    @Output()
    notify:EventEmitter<any>;
    
    constructor() { 
        this._DataSource = new Array<any>();
        this.columnHeaders = new Array<string>();
        this.canDelete = false ;
        this.notify = new EventEmitter<any>();    
    }
    @Input()
    set DataSource(v:Array<any>){
        this._DataSource = v;
        this.columnHeaders = Object.keys(this._DataSource[0]) ; 
        console.log(this._DataSource);      

        console.log(this.columnHeaders);
    }

    @Input()
    set CanDelete(v : boolean){
        this.canDelete = v ;

    }

    get DataSource():Array<any> {
        return this._DataSource;
    }

    get ColumnHeaders():Array<string>
    {
        return this.columnHeaders;
    }

    get CanDelete():boolean{
        return this.canDelete ;
    }

    DeleteRow(v:any):void{
        this.notify.emit(v);
    }

    SelectProduct(v:any):void{
        this.notify.emit(v);
    }

}