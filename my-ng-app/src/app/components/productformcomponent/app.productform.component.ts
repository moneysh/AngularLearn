import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validator, Validators } from "@angular/forms";
import { Product } from "../../models/app.product.model";
import { ProductLogic } from "../../models/app.product.logic";
import { Categories,Manufacturers } from "../../models/app.constants";
import { CustomValidator } from "./app.custom.validator"; 
import { HttpService } from 'src/app/services/app.http.service';

 
@Component({
    selector: 'app-productform-component',
    templateUrl:'./app.productform.view.html'
})
export class ProductFormComponent implements OnInit {
    product:Product;
    products:Array<Product>;
    private logic:ProductLogic;
    // save these constants into local public properties so that they can be used for databinding
    categories = Categories;
    manufacturers  =Manufacturers;
    columnHeaders:Array<string>;
    color:string;
    message:string;

    frmProduct:FormGroup;

    constructor(private serv:HttpService){
        this.product = new Product();
        this.products = new Array<Product>();
        this.logic = new ProductLogic();
        this.columnHeaders = new Array<string>();
        this.color = '';
        this.message = '';

        // instantiate the FormGroup and map it with the Model class using FormContol and validation rules
        //  'ProductRowId': new FormControl(this.product.ProductRowId)
        //  <Key>: MApped with the Model class property usig FormControl
        // this <Key> will be used as formControlName   
        this.frmProduct = new FormGroup({
            'ProductRowId': new FormControl(this.product.ProductRowId,
                 Validators.compose([
                     Validators.required,
                     Validators.minLength(2),
                     Validators.maxLength(8),
                     Validators.pattern('[0-9]+'),
                     CustomValidator.checkEven
                 ])),
            'ProductId': new FormControl(this.product.ProductId),
            'ProductName': new FormControl(this.product.ProductName),
            'CategoryName': new FormControl(this.product.CategoryName),
            'Manufacturer': new FormControl(this.product.Manufacturer),
            'Description': new FormControl(this.product.Description),
            'BasePrice': new FormControl(this.product.BasePrice)
        });


    }

    ngOnInit():void {
        //  Object.keys(obj), will read public members of the obj
        this.columnHeaders = Object.keys(this.product);
        console.log(JSON.stringify(this.columnHeaders));
        //this.products  =this.logic.getProducts();
       this.loadData();
    } 

    clear():void {
        this.product = new Product();
        this.frmProduct.setValue(this.product);
    }
    save(){
        this.product = this.frmProduct.value;
        this.products = this.logic.saveProduct(this.product);
        
    }

    getSelectedProduct(p:Product):void {
        this.frmProduct.setValue(p);
    }

    loadData():void {
        this.serv.getData().subscribe((response)=>{
            // data will be streamed from Observable and will be delivered to the component
            this.products = response;
            this.message = 'data received successfully';
        },(error)=>{
            this.message=`Error Occured while receiving data ${error}`;    
        });
    }

    saveData() :any{
        this.serv.postData(this.product).subscribe((response)=>{
            // data will be streamed from Observable and will be delivered to the component
            this.products.push(response);
            this.message = 'data added successfully';
        },(error)=>{
            this.message=`Error Occured while adding data ${error}`;    
        });
       // this.loadData();
    }

    delete(id : number) : any{
        this.serv.deleteData(id).subscribe((response)=>{
          this.products = this.products.filter(item => item.ProductRowId !== this.product.ProductRowId);
        },(error)=>{
            this.message=`Error Occured while deleting data ${error}`;    
        });
        //this.loadData();
    }

     
}