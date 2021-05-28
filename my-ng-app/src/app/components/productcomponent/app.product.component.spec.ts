import { Product } from "./../../models/app.product.model";

import { TestBed,ComponentFixture,async } from "@angular/core/testing";

import { ProductComponent } from "./app.product.component";
import { DropDownComponent } from "./../../directives/componentsirective/app.dropdown.component";
// for ngModel , two-way binding
import { FormsModule } from "@angular/forms";

// the test suit

describe('Product Component Test',()=>{

    // define required dependencies references
    let component:ProductComponent;
    let fixture:ComponentFixture<ProductComponent>;
    let button:HTMLElement;
    let row:HTMLElement;

    // define the dependencies for testing the COmponent so that the test will bootstrap it in memory
    // using the NgModule
    // since this step must be executed befor each test case initialize this in beforeEach() method
    beforeEach(async()=>{
        TestBed.configureTestingModule({
            declarations:[ProductComponent,DropDownComponent],
            imports:[FormsModule],
        }).compileComponents() // validate the component with its HTML and code
    }); 

    // create an instance of component and execute the instance with defaut binding
    // this will execute constructor and will also initialize dependencies if any

    beforeEach(()=>{
        fixture = TestBed.createComponent(ProductComponent); // bootstrap the component inside test env.
        component = fixture.componentInstance; // execute constructor and initialze all defaults and also initialize dependencies if any
        fixture.detectChanges(); // execute default binding with HTML
    });

    // write the testcase
    it('should calculate 20% as Tax based on the BasePrice',()=>{
        // arrange
        let prd = new Product();
        prd.BasePrice = 40000;
        component.product = prd;
        // read the HTML Template from the components fixture
        // this will be read by jest from the memory
        const htmlTemplate = fixture.nativeElement; // the selector of the component that has html template
        // iterate over the DOM in memory and read the button element
        // the save button in HTML is applied with class as btn-success
        button = htmlTemplate.querySelector('.btn-success');
        
        
        // dispatch the click event on it
        // this will invoke the methodm bound to the click event of the button
        // act
        const event  = button.dispatchEvent(new Event('click'));
        // after the event is raised monitor any changes in DOM
        fixture.detectChanges();
        // assert
        // assert those changes to verify the test
        // currently the Tax TextBox must show tax as 20% of the BasePrice
        expect(htmlTemplate.querySelector('input[disabled]').value).toEqual('8000');
    }); 

    it('new product entry should be saved and displayed',()=>{
        // arrange
        let prd = new Product();
        prd.ProductRowId = 102;
        prd.ProductId = "prd-102";
        prd.ProductName = "Laptop";
        prd.Manufacturer = "IBM";
        prd.CategoryName = "Electronics";
        prd.Description = "Description";
        prd.BasePrice = 40000;
        component.product = prd;
        
        const htmlTemplate = fixture.nativeElement; 
        button = htmlTemplate.querySelector('.btn-success');
      
        const event  = button.dispatchEvent(new Event('click'));
        
        fixture.detectChanges();
        
        console.log(component.products[1]);
        //console.log(htmlTemplate.querySelector('table[id="product-list"] tbody tr:nth-child(2) td:nth-child(1)').textContent);
        expect(htmlTemplate.querySelector('table[id="product-list"] tbody tr:nth-child(2) td:nth-child(1)').textContent).toEqual('102');
        expect(htmlTemplate.querySelector('table[id="product-list"] tbody tr:nth-child(2) td:nth-child(2)').textContent).toEqual('prd-102');
        expect(htmlTemplate.querySelector('table[id="product-list"] tbody tr:nth-child(2) td:nth-child(3)').textContent).toEqual('Laptop');
        expect(htmlTemplate.querySelector('table[id="product-list"] tbody tr:nth-child(2) td:nth-child(4)').textContent).toEqual('Electronics');
        expect(htmlTemplate.querySelector('table[id="product-list"] tbody tr:nth-child(2) td:nth-child(5)').textContent).toEqual('IBM');
        expect(htmlTemplate.querySelector('table[id="product-list"] tbody tr:nth-child(2) td:nth-child(6)').textContent).toEqual('Description');
        expect(htmlTemplate.querySelector('table[id="product-list"] tbody tr:nth-child(2) td:nth-child(7)').textContent).toEqual('40000');
        
        expect(component.products[1]).toEqual(prd) ;        
        
    }); 


    it('selected row cell values shoud appear in text box',()=>{
       
        const htmlTemplate = fixture.nativeElement; 
        let products = component.products;

        console.log(component.product);

        
        

        button = htmlTemplate.querySelector('table[id="product-list"] tbody tr:nth-child(1)');           
      
        const event  = button.dispatchEvent(new Event('click'));
        fixture.detectChanges();

        let prd = component.product;

        console.log(prd);

         let selectedProductRowId = htmlTemplate.querySelector('table[id="product-list"] tbody tr:nth-child(1) td:nth-child(1)').textContent ;
          let selectedProductId =htmlTemplate.querySelector('table[id="product-list"] tbody tr:nth-child(1) td:nth-child(2)').textContent ;
         let selectedProdcutName =htmlTemplate.querySelector('table[id="product-list"] tbody tr:nth-child(1) td:nth-child(3)').textContent;
       let selectedProductCategory =htmlTemplate.querySelector('table[id="product-list"] tbody tr:nth-child(1) td:nth-child(4)').textContent;
        let selectedManufacturer = htmlTemplate.querySelector('table[id="product-list"] tbody tr:nth-child(1) td:nth-child(5)').textContent;
       let desc = htmlTemplate.querySelector('table[id="product-list"] tbody tr:nth-child(1) td:nth-child(6)').textContent;
        let baseprice = htmlTemplate.querySelector('table[id="product-list"] tbody tr:nth-child(1) td:nth-child(7)').textContent;

        
        
        console.log(htmlTemplate.querySelector('input[id="ProductRowId"]').value);
        console.log(htmlTemplate.querySelector('input[id="ProductRowId"]').ngModel);


        expect(htmlTemplate.querySelector('input[id="ProductRowId"]').value).toEqual(selectedProductRowId);
       
           
        
    }); 


});