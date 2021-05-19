# ES 6
- Modern Front-End App Dev. Standards
- New genration Programming Features
    - Scode Definition for variable
    - Template String
    - Data Types Support (Implicttely in High-Level-JavaScript and default in TypeScript)
    - Array and String Improvemts
    - for..of loop
    - Arrow Operator
    - New Collections (Inplicitely available in High-Level-JavaScript)
    - Object Oriented Programming
    - Modules
    - Promises
- Followig Languages supporting ES 6
    - High-Level-JavaScript aka ES 6 aka JavaScript
    - TypeScript by MIcrosoft, inspired from C#
    - Dart, language supported by Google
- ECMA Specifications
    - Contolled by w3c 
        - ES 6 Code Name and  Library is ES 2015
            - Iterators (Implicit)
        - ES 7 Code Name and  Library is ES 2016
            - async and await 
        - ES 8 Code Name and  Library is ES 2017
            - type definition
                - combining multiple data-tyeps in a single type definition to declare a variable 
        - ES 9 Code Name and  Library is ES 2018   
            - Iterators and Async Iterators
            - Generators
            - Proxy

# Programming with TypeScript
- Install TypeScript in Global Scope of the Machine 
    - rerequisites
        - Node.js must be installed
        - Visual Studio Code (VSCode) recommended or anyn other JS IDE
    - Command
        - the workspace (Solution) must have 'package.json' file
            - The the Confoguration file for Front-End Package
                - npm install -y
            - Important Sections of package.json
                   - 'scripts', contains commands to Run, Test, Build the package
                   - 'dependencies', section contains all packages for Production or exection of the application
                        - npm install --save <PACKAGE-NAME>
                   - 'devDependencies', section contains all packages for Development
                        - npm install --save-dev <PACKAGE-NAME>       
        - npm install -g typescript
            - It will provied the 'tsc' CLI for following operations
                - The tsc --init
                    - COmmand to create TypeScript Configurtaion file for Transpiling the TypeScript into JavaScript
                        - tsconfig.json
                - The tsc <FILE-NAME>.ts
                    - The Command used to transpile the TypeScript into JavaScript based on tsconfig.json  
- After the Transpilation into JavaScript, the js file can be executed in browser or on Node.js on server-side

- TypeScript Features
    - the scope definition of the variable inside the block using 'let'
        - preferred over 'var' of javascript 
        - the 'var' is function scope / namespace scope 
        - the 'let' is block scope like serer-side programming
    - Support for Data Types
        - Strict Type Check by default
        - number, string, boolean, date, Array<T>, [], Object                     
    - Template String
        - The new ES 6 Syntax for STring Cocatination as HTML string operations
            - Stntax
                - `The value of str =  ${str}`
                - Build an Immutable (non-killable) string object by using multiple strings
    - Array<T>    
        - Most popular Data Structure for defining the collection in Fromt-End Apps developed using JavaScript
            - If a function accepts another function reference as input parameter, then it can be replaced by 'Arrow Operator'
                - array.forEach(()=>{});
        - forEach() and map() method used for iteration in Array
            - forEach() returns void so it cannot modify the array and return it
            - map() can return a new array by modifying it
        - filter(), method used to return array of resultant values from input array based on condition that is true       
    - Object Oriented Programming
        - Familarity for server-side developers to work with Modern front-end APps            
            - The 'class'
                - default access specifiers for members is 'public'
                - used 'private' and 'protected' explicitely
                - the 'this' object is a default scope of JavaScript used in class for accessing class members      
            - Parameterized constructor
                - COnstructor with Access Spcifires for parameters those are 
                used to define members opf class
                    - the 'constructor()' is a standard function
            - No support for Overloading by default
            - Inheritence using 'extends' keyword
                - If the base class have the ctor with parameters then derive class ctor must use the 'super()' call in it to link scope of derived class with the base class 
            - Interface is implemented using  'interface' (this is a type) and it is implemented by class using 'implements' keyword  
    - Promise objects
        - like a 'Task' objectb in .NET 4.x
            - Unit of Async operation
        - Promise is used to contain all async operations
            - ES 7+
                -  if a method returns promise object then it can be decorated with 'async'  and the statement for promsie is decorated with 'await'                   

# Hands-on-Labs

# Date: 17-May-2021
Crate an Array on JSON object for storing EMployee information as follows
let arr = [ {EmpNo:101, EmpNAme:'ddd', DeptNae:'IT', Salary:1000}]; // likewise at alease 20 records for different deparments
- perform following operations on this array
    - list all employees for specific DeptNAme
    - Sort Employees arary by EMpNAme, use sort() method
    - Reverse Employees by Salary, used reverse() method
    - create seperate arrays for each department, use reduce() method 

