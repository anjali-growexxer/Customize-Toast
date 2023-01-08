# Customize-Toast

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Install
npm i gx-cust-toast

## Use 
import { CustToastModule } from 'gx-cust-toast'.
Add CustToastModule to imports in module.ts.

Add tag <lib-cust-toast [toast]="toast"></lib-cust-toast>
Provide the value of toast.

# Properties of Toast 
## Properties | Type | Value

| VARIABLE       |      TYPE         |      VALUE     |
| :-------:      |   :-------:       |  :-------:     |
|   message      |      string       |     "Hi Team!" |
| toastPosition  |     string        | "top-right" "top-left"  "top-full-width"  "bot-right"  "bot-left"  "bot-full-width"  "bot-center" "top-center"|
| showProgressBar|     boolean       |   true | false |
| toastType      |     string        |"Success" "Info" "Warning" "Error"|
| toastColor     |     string        | "#ffffff" |
| textColor      |     string        |  "#ffffff" |
| iconColor      |     string        | "#ffffff"|
| iconBackgroundColor | string | "#ffffff"|
| titleColor | string | "#ffffff" |
| progressBarColor | string | "#ffffff" |
| tapToDissmiss | boolean | true or false |
| closeButton | boolean | true or false |
| timeout(in ms) | number | 5000 |
| disableTimeout | boolean | true or false |
| iconClass | string | "bi bi-check-lg" |
 
 
## Example 
this.toast= {<br />
      message: "Hi, Team!",<br />
      toastPosition:"top-right",<br />
      showProgressBar:true,<br />
      toastType:"Success",<br />
      toastColor:"#E9EDF6",<br />
      textColor:"grey",<br />
      tapToDissmiss:true,<br />
      closeButton:true,<br />
      timeout:5000,<br />
      disableTimeout:false,<br />
      iconBackgroundColor:"blue",<br />
      iconColor:"#ffffff",<br />
      titleColor:"blue",<br />
      progressBarColor:"blue",<br />
      iconClass:"bi bi-check-lg"<br />
    }
    
## CSS
In body set overflow as hidden.
