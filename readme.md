# Programming with Angular

- Using Angular CLI
    - The tool to create an Angular Project with all its dependencies
    - npm install -g @angular/cli
    - ng new <PROJECT-NAME>
- The Angular EcoSystem
    - "@angular/animations": "~12.0.0",
        - Animations
    - "@angular/common": "~12.0.0",
        - Used to manage the Angular Module Loading (Standard MOdules and External Custom Modules)
        - @angular/common/http (Angular 4+)
            - The Http COmmuncation Objects for All external Async Calls
    - "@angular/compiler": "~12.0.0",
        - Provide the Angular Dev. Compilation and Prod. Compilation
            -  Dev. Compilation
                - Standard Compilation where the object will be processed in the Browser when it is requested JUST like JIT
            - Prod. Compilation
                -  Uses the Ivy Engine Angular 10+
                    - Provide the Production Compression for Angular build output
                        - Minify the Output JavaScript Files
                        - Uses Ahead-Of-Time Compilation   
                    - Static Type Checking for Properties Bound with HTML elements
                        - If the text propety of code is bound with numeric property of HTML element then this generates compiler error     
                - Angular's Component ENcapsulate HTML (inline HTML or External HTML file)        
    - "@angular/core": "~12.0.0",
        - The foundation of Angular. Contains Most of the major Classes for Angular development
            - NgModule: Creating Ananular Module. COntainer for All Standard Angular and Developer  defined Application class 
            - Component, Directive, Injectable, Pipe, Input, Output, HostListener, etc.   
    - "@angular/forms": "~12.0.0",
        - Angular Forms for Reactive Forms like MVC Views and for Model Validation 
    - "@angular/platform-browser": "~12.0.0",
        - Provide a 'BrowserModule' class, used to load and render the Angular Module with all its dependencies on Browser's UI Thread
            - Each Angular app has 'ONLY-ONE' BrowserModule instance
            - Manage the lifecycle of Component
                - Manages Binding of Components
                    - Interpolation, showing data of Property inside the component on HTML UI
                    - Property-Binding, bind the property of COmponent with HTML element's attribute
                    - Event-Binding, bind a method of the omponent with the event of the HTML Element
                    - Two-Way Binding = Property Binding + Event BInding  
                - Manages an 'INCREAMENTAL-DOM' (?)    
    - "@angular/platform-browser-dynamic": "~12.0.0",
        - The Package that provides 'bootstrapModule()' method to bootstrap Angular Application in Browser
            - Loads the Angular App in browser and Manage its lifecycle(?)
            - Uses to Expose the Angular Component as a Custom Element (aka Angular Element) so that third party JavaScript Library / Framework can use it (Micro Front-End) 
                - @angular/elements
    - "@angular/router": "~12.0.0",
        - for SIngle Page Applications using Routing
    - "rxjs": "~6.6.0",
        - Reactvie Extensions for JavaScript
        - Provides an Object Model to Maintain teh state of HTTP Response in Component
        - Used to perform paralles calls to external HTTP Services
        - Manage the Promise based subscription  for al external Async calls
    - "tslib": "^2.1.0",
        - the TYpeScript Transpilation with Polyfills. High-Level TypeScript code will be succssfully compiled and will be transformed into JavaScript w/o warnings
    - "zone.js": "~0.11.4"    
        - The Polyfills for Managing POst-Loading Warnings and Error Messages in the browser
        - This generates the Stack Trace to understand and resolve errors

# Angular CLI Project Structure
    - package.json
    - tsconfig.app.json
        - TypeScript Application COnfiguration for Angular Application
        - This is based on tsconfig.json
            - Configuration for
                - Angular Compilation
                    - forceConsistentCasingInFileNames
                        - Class Names must use PascalCase
                        - Compponent File Name
                            - <NAME>.component.ts
                        - Module FIle Name
                            - <NAME>.module.ts
                        - Service
                            - <NAME>.service.ts
                        - Directive
                            - <NAME>.directive.ts
                        - Pipe
                            - <NAME>.pipoe.ts                 
                - Build
                     "experimentalDecorators": true,
                        - Compile the decorators applied on developers classes / function / property to generate additional behavior or exeuction for the class or function
                        - Power of Angular that is transpiled by TypeScript and executed by Browser
                        - E.g.
                            - @NgModule, @Compopnent, @Injectable, @Directive, @Pipe, etc.    
                     "moduleResolution": "node",
                        - Resolves all imports w.r.t. the File IO using Node.js
                - Destination / Distributable FOlders
                - EndtrPoint
                        "files": [
                            "src/main.ts", 
                            "src/polyfills.ts"
                        ],
                        - compilation will start from main.ts then use 'moduleResolution' to import all imported files and its depednencies for a single Unit of compiled output and uses the polyfilles that compilation will be done w/o any warning and the output js must be Browser compatible
                            - main.js
                - Module Resolution
                - Lib Support for Transpilation
                - Angular 10+
                    - Static Type Check for HTML
    - tscopnfig.spec.json
        - based on tsconfig.json but used for running test-scrips
            - <NAME>.spec.ts or <NAME>.test.ts
        - uses 'jasmin' library by default for testing                     

# Angular Production Build
- ng serve -prod
    - USes 'Ivy' Engine from Angular 10+
    - Removes all unUsed resoureces from the Production Build
    - No Compilation for Static HTMLs, instaed they wll be  directly converted as JS Objects and mergerd in main.js
    - All standard Angular Packages will be compiled, compressed and merged with 'main.js' (Standard Packages + Application Code), result into size increase
- Using component for Rendering into te Browser using index.html
    - The Component must have the 'selector'
    - The Component must be declared into 'declarations:[]' array of NgModule
    - The Component must be passed into the 'bootstrap:[]' array of NgModule
    - The selector of the component must be used in idnex.html 

# Angular Binding aka DataBinding
1. Interpolation
    - Exposing public data member of the Component class with the HTML template using interpolated expression
        - {{<PROPERTY-NAME>}}
        - e.g. {{message}}, the 'message' is a public property of the component class
        - Read-only from the UI
        - This may also accept the JS compiled formula expressions
            - {{100+3000}}
2. Property Binding
    - Exposing the public data memebr of the component to the readable / writable attrbute of HTML: element
        - [<ATTRIBUTE-OF-HTML-ELEMENT>] = "<PROPERTY-NAME>"
        - e.g.
            - <input type="text" [value]="message">
                - [value], the Angular compiled attirbute of HTML binding with 'message' property of the component
                    - [href], [style],[disabled], etc.   
            - THis is one-way from Component to UI              
3. Event-Bindng
    - Exposing publc methods of component class to an event of HTML element
    - The event is raised on UI and update the component's property
    - (<EVENT-NAME>) = "<PUBLIC-FUNCTION-NAME>"
    - e.g.
        - <input type="button" (click)="display()">
            - display() is a public methodm of the component
            - e.g. (change), (keyup), etc.
4. Two-Way Binding
    - Combination of Property Binding + Event Binding           
    - Synatx
        - [(ngModel)]="<PROPERTY-NAME>"
            - ngModel is a  standard Angular  Directive used as a attribute directive (an attribute of HTML element) for two-way binding 
            - <input type="text" [(ngModel)]="name">
                - name is the public property from COMPONENT
    - ngModel is available in 'FormsModule' from @angular/forms
        - import this in NgModule imports:[] 
            - When ngModel is used the following steps will be monitored and executed by Angular System
                - The default event on the HTML element will be listened by ngModel
                    - e.g. id input:text then default event is 'keyup'
                - The ngModel will raise the 'ngModelChanged' event as response to default event and read the value that is entered / selected / generated for the HTML element
                    - e.g. input:text, the 'value' attribute will be impacted for default event
                - BAsed on the ngModelChanged the Component will call its 'change' event (OnChanges)
                - The Compont will receive the new value from ngModelChanges
                - This new value will be updated in public property bound with the ngModel
                - The component will send value back to UI and update the UI    
5. Directives
    - They are standard object used for following
        - Creating Custom Reusable UI
            - 'Component Directive', each component is directive 
        - Assigning a custom behavior to HTML element as attribute
            - 'Attribute Directive' e.g. ngModel, formControlName, formGroup, etc.
        - Generating the HTML Element Dynamically based on Condition to modify HTML Structure
            - Structural Directives
                - *ngFor, execute for..of loop on UI    
                - *ngIf, if condition to add / remove HTML element from DOM
                - *ngShow, now we use this for [hidden] proeprty binding    
                    - show / hide HTML elements      
                - *ngSwich--ngSwitchCase       


# Angular's DOM Rendering
    - BrowserModule renders the DOM of the HTML Template of the Component based on Binding and Directives
    - THis uses 'Increamental DOM'
        - This stored the previous rendering request into browsr's memory
            - when any DOM updates are requested (resultant of binding or structiral directives)
                - The new request dom is compared with already cached DOM and only changed are pushed for rendering
                - Incremental changes on to the enw DOM request with less memory-footprint   

# Programming with Angular
- Creating Angular Component using of Model classes for Application Development
    - Component
        - Data Properties
            - Received from Model classes
        - Events
            - Use to exeucte 'some-front-end-logic'
                - Provided to component using the Presenter Logic class 
        - If component uses (hence the Anngular Application) the third party CSS lib / frwk theninstall it using the following command
            - npm instal; --save bootstrap
        - Configure this lib /  frwk in the 'styles' of angular.json in the build configuration      
        - Angular Component's Lifecycle Methods
            - OnChange, ths interface implemented by Component. THis has 'ngOnChange()'
                - Executed when a property is changed. Invoked after ctor but before ngOnInit
            - OnInit, the interface implemented by Component. THis has 'ngOnInit()'
                -  ngOnInit(), method will be invoked immediately after constructor
                    - Write logic thatb we cannot prefer to write inside ctor 
                        - e.g. HTTP Service calls or any other resource intensive operations
            - OnDoCheck, ths interface implemented by Component. THis has 'ngDoCheck()'
                - Check for any updated needed in HTML based on Property Changed. Invoked afeter ngOnInit  
            - Then View Methods     
        - Practices to be followed while definig HTML generation for the component based on the data
            - If the HTML elements e.g. Table is dynamically egnerated based on external data, then avoid hardcoding of Headers and Rows in HTML. Instead use the generalization using JavaScript REflection fearures
            - If the TypeScript class (4.0+) is used to read is properties dynamically in iteration then the class must have an 'Index Signetire' to support the property names reading in iteration
                - [x:string]:any
                    - Add this member in the typescript class
                        - x will be the name of the property. This property name will be string
                        - any is the type of the property       
            - If a same HTML UI is appearing multiple times in single or across multiple components, then think of creating re-usable component and use it as child component   
                - Using the Component as 'Directive'         
    - Component Rusability
        - The Child COmponent Must have @Input() decorated prtoperty for acceping data from parent. Thsi property will be used for 'Proeprty-Binding' by parent component. The child component must have @Output() decorated EventEmitter<T> property that will emit an event from child to parent and parent will subscribe it as 'Event-Binding'. Data emitted fron child to parent will be captured byb paret using $event object. (JAVASCRIPT standard event object) 
    - Forms 



# Hands-on Lab
# Date : 19-May-2021
1. Create a 'Angular Calculator' looks like the WIndows Calculator with scientific Features (Mandatory)
2. Generate HTML xTable based on the Complex Array using *ngFor (optional)
    - Heades and Rows must be generated dynamically

# Dae: 20-May-2021
1. CReate a GridComponetn using HTML Table with FOllowing needs
    - All Columns and Rows MUST be dunamically generated
    - The Component must have 'canDelete' property, if this is set to true, each row of the table should generate delete button. When this button is clicked the row must be removed from Collection of the parent component
    - Each column must have 'sort' and 'reverse' button (use Bootstarp classed to show Arrow buttons)
        - sort / reverse the table columns based on click on these buttons  


