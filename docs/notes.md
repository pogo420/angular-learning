
# Angular Notes(Angular 17):

## Front end frameworks in market:

* Google -> Angular
* Facebook -> React

## What is DOM?
* DOM -> Data object model; How html pages is represented; like tree structure.
* JS can process DOM.

## Angular intro:
* Angular makes the development time faster, with prebuild logics.
* SPA - Single page application; 
   - Html, js and css are loaded first time.
   - Data changes with time. 
   - Webpage is not loaded duting usgae.


* Angular uses TS instead of JS.
* TS is installed over npm. Done via angular in the backend.
Dependencies are installed in node_modules directory.

## Angular componnet:
* Components represents area of view that shows inside the browser.

* constructor -> will be executed when object is created.
* OnInit -> When a componnet is fully initialized in a dom.
   * All network call shall be added there.

## Data movement between components:

* During data movement from parent to child: when waiting for data use `@Input`
```
In parent html:
    <c1 [child_var]='value'></c1>

In child html:
    @Input variable_name 
```  
* when sending data use `@Output`


## Data binding:
* variables in {{}} in html files: `<img src = "{{imgUrl}}">`

## Property binding: 
* `<img [src] = "imgUrl">`
* Use `[]` bracket for property, variable assigned must be defined in the correcponsing tf file.

## Class/Style binding:
```
<h1 [class.text-red] = bool> </h1>
In the above tag style text-red is applied when bool is true.
<h1 [style.color] = "bool ? 'red' : 'blue'> Text </h1>
```
## Events binding:
* `<button (click)=""clickHandler()> </button>`

## Event Filtering:
* Called when we press enter, check the snippet below:
* `<input type="text" (keyup.enter)="onKeyup()">`

## Template variabes/One way data binding:
* E.g. `<input type="text" (keyup.enter)="onKeyup(username.value)" #username>`
* Method will receive the value as shown; # is used to define template variable.
* Dataflow: component(tf) => view

## Two way binding:
* E.g. `<input type="number" [(ngModel)]="age" (keyup.enter)="onKeyupAge()" >`
* Make sure FormsModule is imported.
* Dataflow: compoment <=> view
* Everying other than this is one way data binding.
    
## Directives:
1. Component directive:
2. Structural directive:
   * Changes html structure:
   
      * `*ngFor`: 
            ```
            For rendering array data for view.
            getting index from ngFor: *ngFor = "let pos of items; let i = index"
            ```
    
       * `*ngIf`:
          ```
            <div *ngIf = 'items.length > 0; else noData'>
                html...
            </div>
            <ng-template #noData>
                html...
            </ng-template>
          ```
        * `*ngSwitchCase`:
            ```
            <button (click)="onClick(1)"> Gablu </button>
            <button (click)="onClick(2)"> Gublu </button>
            <button (click)="onClick(3)"> Puglu </button>

            <br>

            <div [ngSwitch] = "buttonCheck">
                <div *ngSwitchCase = "1"> You pressed gablu</div>
                <div *ngSwitchCase = "2"> You pressed gublu</div>
                <div *ngSwitchCase = "3"> You pressed puglu</div>
                <div *ngSwitchDefault = "3"> Please press</div>
            </div>
            ```
3. Attribute directive:
   * ngClass
    ```
        <p [ngClass]="{'strike': isStike}">Click the button to strike this text</p>
        <button (click)="iniStrike()"> click </button>          
    ```
4. Custom directive.

## Change detection: 
Angular is having this mechanism. if a value is changed , view is rerendered.


## Pipes
Builtin pipes:
* uppercase
* lowercase 
* decimal 
* currency pipe 
* Date pipe 
* Json pipe: Converting objects into json.
* % pipe
* slice pipe
   ```
    <!-- basic slice piple -->
    <p>{{items | slice : 0 : 2}}</p>

    <!-- Last element from slice pipe-->
    <p>{{items | slice : items.length-1:items.length}}</p>
   ```

## Service:
* Used for common logics.
* Don't subscribe to http calls inside service.

## Angular Forms:
### Reactive:
* Using TS classes.

### Template driven:
* Use of `ngForm` directive.
* To get data from a form fields we need to use `ngModel` for each data field.
* `name` is  must if we use `ngModel`. Check the snippet below
    ```
    // In html template; 
    <form #f = "ngForm" (submit)="onSubmit(f)">
        <input type="email" name="email_id" ngModel>
        ...
        ...
    </form>
    ```
* In component file. We are accessing data.
    ```
    public onSubmit(f: NgForm){
        console.log(f.value)
    }
    ```
## Validation of forms:
* In each data field(required for invalid check):
  ```
  #<template_variable> = "ngModel"
   (event_name)="eventHandlerUserDefined(<template_variable>)"
   required
   ```
* In component file.
  ```
  public eventHandlerUserDefined(template_variable: NgModel){
    console.log(template_variable)
  }
  ```
* NgModel object has many useful items to handle validation. Example:
    ```
    <div  class="alert alert-danger" *ngIf="email_id.touched && email_id.invalid"> Email can not be empty</div>
    ```
* More validation can be done check this [file](../src/app/components/add-concepts/add-concepts.component.html).


## Angular router:
### routerLink vs href:
* Pages is reloaded when we use `href`.
* Using `routerLink` only necessary data is downloaded. Html, js and css is not downloaded again.

### router paramaters:
* Defining router with parameters.
   * calling the [url](../src/app/components/home/home.component.html).
   * Few imports required in [ts](../src/app/components/home/home.component.ts).
* Reading [parameters](../src/app/components/angular-params/angular-params.component.ts).

### query parameters:
* Advantage of using query params is: it's a optional and it won't give route issues, do http without query.
* For details check home component and angular-query-params component.

## Important Operators:
* All observables must have suffix `$`.
```
new Observables(
    observer => {
        setTimeout(()={
            observer.next(data);
            observer.complete();
        });
    }
);
```
* Safe Navigation Operator: `?`
   * Used to prevent Angular from throwing errors, when trying to access object properties of an object that don’t exist.
   * Useful in http calls, It is rendered when data is available:
        ```
        {{header?.title}}
        ```
* Spread operator: `...`
    ```
    let myArr = [1, 2, 3];
    return [1, 2, 3];
    //is the same as:
    return [...myArr];
    ```
* submit vs ngSubmit:
    ```
    submit -> post call directly. Can be a security concerns.
    ngSubmit -> prevent post calls and aids in validation.
    ```