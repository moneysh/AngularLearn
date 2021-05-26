# Application State Management in Angular

1. Action
    - Represents the event dispatched from the Component
    - ActionCreator
        - The Logic to be executed against an event that is dispatched
        - This is a method that may accepts input parameter known as 'payload' 
        - This method may return output which is also known as 'payload'
        - Payload is a data send by Component and to be updated back as output in the Store
    - Action represents 'What has happened?'    
    - This is the 'First-Step' of State management
2. Store
    - The Global object that contians data, a state, which will be subscribed by all components
    - Store, may directly dispatch action and receive data
    - Store is queried for data requirements from the Components
    - The 'State' has a schema (JSON object Schema or array) and this must have 'initialValue' or 'inistalState'
    - The 'State' in store is always updated by Reducer
3. Reducer
    - The object that monitor all actions dispatched by component and store.
    - The data generated after the execution of action is always updated in store
    - A Pure JavaScript function having input as State and Output also a state
    - The Reducer represents 'How the update has happened?'         
4. Effects
    - The Service object that manages all 'Asynchronous' operations
    - If the 'ActionCreator' has async logic then the effect executes it   
        - The effect manages Promise Subscription and Observables
    - Links input async operation with output operation (Success / Fail) and dispatch the action accroding to the output 

# Packages for NGRX
1. @ngrx/core
    - Core Packege for the application
    - StoreModule object
        - The Module that defines lifecycle for NgRX application
        - Provide 'store' object taht contains the application State    
2. @ngrx/store
    - The 'createReducer()' method to define reducers
    - The 'on()' method that listen to an event or action dispatched
    - ActionReducerMap 
        - The object that is used to manage reducers at the root level of the application to manage and update the 'state' in the store 
        - This object is actutally responsible to update the 'old state' of the store to 'new state'
    - Store
        - represents the Store
    - select
        - The object that is used to query the store so that selected data can be read from the store          
3. @ngrx/effects
    - Used to Manage all Async Operations
    - createEffect(), the 0bject used to define effect to perform all async operations, can be used to execute queries on store
    - ofType, used to  detect the type of ActionCreator to be executed
    - Actions, the type of naction to be dispateched
        - Actions is of the type Observable 
    - This is defined as a Angular service and injected in NgModule using EffectsModule    
    - EffectsModule
        - Initialize Effects in Global scope to make sure that the Store knows the App uses Async calls    
4. @ngrx/router-store
    - Make sure that Store is available for Routing 
5. @ngrx/store-devtools
    - The In Browser Plugin to simulare NGRX in dev. mode. (not recommended in production mode)
    - StoreDevtoolsModule
        - A Simulator Object in Browser 