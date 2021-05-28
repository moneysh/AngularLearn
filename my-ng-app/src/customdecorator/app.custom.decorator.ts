export function logMethod(){
    // return a function scope that is the decorator applied on the method
    return function(
        target:Object, // class of which method will be applied with decorator
        key:string, // the tergate method on which the decorator is applied
        descriptor:PropertyDescriptor // the method arguments if any aka method metadata
    ){
        // logic for decorator
        // all method arguments will be read
        // 'arguments' array, th default array of the JS
        // start iterating over the arguments
        descriptor.enumerable = true;

        // start exedcuting the decorator code alog with the method
        // working on the not-null state of the decorator
        // make sure that, the method on which the decorator applied
        // ins invoked and then only execute the decorator
        // make sure that the descriptor?.value as nullable is used
        const decorator =  descriptor?.value; 
        // closure that will make sure that the decorator is ready to be invoked for
        // method execution
        descriptor.value  =function() {
            // get the instance name of the target object 
            const targetName = target.constructor.name;

            // read all arguments passed to the method
            const args = JSON.stringify(arguments);

            // log this infromation
            console.log(`The Invoked method is ${targetName}.${key} with arguments ${args}`);
            // ask the TypeScript that this decorator must be transpiled and executed
            // as a part of Component / Directive where it is applied
            // apply() is a javascript function
            // thst is used to dynamically attach a function 
            // on an object and ask the compiletr to execute it
            // when the obnject is invoked    
            const result = decorator.apply();
            return result;
        };
        // return the decorator to the caller on the class
        // so that when the method execution is complete
        // the decorator also close itself and return 
        return descriptor; 
    }
}