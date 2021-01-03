<!-- ![](./images/preview.png) -->
<h1 align='center'>ngx-sand-typeahead</h1>

<h3 align="center"> An angular typeahead package</h3>
<br>
<p align="center"> 
  <a href="https://github.com/SandeepBalachandran/ngx-sand-typeahead/releases/" target="_blank">
    <img alt="GitHub release" src="https://img.shields.io/github/v/release/SandeepBalachandran/ngx-sand-typeahead?include_prereleases&style=flat-square">
  </a> 

  <a href="https://github.com/SandeepBalachandran/ngx-sand-typeahead/commits/main" target="_blank">
    <img src="https://img.shields.io/github/last-commit/SandeepBalachandran/ngx-sand-typeahead?style=flat-square" alt="GitHub last commit">
  </a>

  <a href="https://github.com/SandeepBalachandran/ngx-sand-typeahead/issues" target="_blank">
    <img src="https://img.shields.io/github/issues/SandeepBalachandran/ngx-sand-typeahead?style=flat-square&color=red" alt="GitHub issues">
  </a>

  <a href="https://github.com/SandeepBalachandran/ngx-sand-typeahead/pulls" target="_blank">
    <img src="https://img.shields.io/github/issues-pr/SandeepBalachandran/ngx-sand-typeahead?style=flat-square&color=blue" alt="GitHub pull requests">
  </a>

  </br>

  <a href="https://standardjs.com" target="_blank">
    <img alt="ESLint" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square">
  </a>
  
  <a href="" target="_blank">
    <img alt="ESLint" src="https://img.shields.io/github/stars/SandeepBalachandran/ngx-sand-typeahead">
  </a>
  
  <a href="" target="_blank">
    <img alt="ESLint" src="https://img.shields.io/github/forks/SandeepBalachandran/ngx-sand-typeahead">
  </a>
   <a href="" target="_blank">
    <img alt="Codesize" src="https://img.shields.io/github/languages/code-size/SandeepBalachandran/ngx-sand-typeahead.svg">
  </a>
  <a href="" target="_blank">
    <img alt="Top Language" src="https://img.shields.io/github/languages/top/SandeepBalachandran/ngx-sand-typeahead.svg">
  </a>
  
</p>
<hr>

## Demo 
![](https://github.com/SandeepBalachandran/ngx-sand-typeahead/raw/main/assets/demo.gif) 

* [Live Demo](https://angular-8-ngx-sand-typeahead.stackblitz.io/)
* [Playground](https://stackblitz.com/edit/angular-8-ngx-sand-typeahead)
* [NPM package](https://www.npmjs.com/package/ngx-sand-typeahead)

## Table of contents
====================
* [Features](#features)
* [Installation](#getting-started)
* [API](#api)
* [Usage](#usage)

## Features
* Type and search at the same time
* Limit number of items displayed in dropdown
* Optional second and third parameter to display
* Angular form support
* Built in filter functionality
* Easy to customize
* Plug and play feature


## Getting Started
### Step 1 : Install the package 
#### NPM
```cmd
npm install ngx-sand-typeahead
```
### Step 2 : After installation import SelectDropDownModule into your root or feature module

```cmd
import { SandTypeaheadModule } from 'sand-typeahead';
```
### Step 3 : Add ``` SandTypeaheadModule``` to the imports of your NgModule

```cmd
@NgModule({
  imports: [
    ...,
    SandTypeaheadModule
  ],
  ...
})
class YourModule { ... }
```

### Usage  
* Use ```<ngx-sand-typeahead></ngx-sand-typeahead> ``` in your templates to add the custom dropdown in your view like below

```ts
  <ngx-sand-typeahead (searchChange)="onSearch($event)" (valueSelect)="onSelect($event)" (blurInput)="onBlur($event)"
    (clickInput)="onClick($event)" [options]="dropdowndata" [settings]="settings">
  </ngx-sand-typeahead>
 ```
## API

#### Input

* ```options:Array``` - Array of objects that are to be the dropdown options. 
* ```settings:Object``` - Settings object to change the default configurations.

```cmd
  settings = {
      inputDirection: 'ltr',
      displayKey: 'name',
      placeholder: 'Input here',
      height: 300,
      limit: 0,
      subtitleEnabled: false,
      subTitleKey: '',
      minorTitleEnabled: false,
      minorTitleKey: '',
      heading: ''
  };
```
 
  | Property        | Purpose                                                               | Type   | Default value  |
  | ----------------|---------------------------------------------------------------------- |--------|----------------|
  | displayKey      | The objectname of the array to be taken to display in the dropdown    | string | name           |
  | placeholder     | Placeholder for the input field                                       | string |  Input here    |
  | Max height          | Height of the dropdown (px)                                           | number | 300            |
  | Inputdirection  | The direction of the search input. Can be ``rtl`` or ``ltr`` ( default )         | string |    ltr         |
  | heading  | The header text of the dropdown to be displayed       | string |    none         |
  | subtitleEnabled | The optional sub heading beneath the main title        | boolean |    false         |
  | subTitleKey  | The objectname of the array to be taken to display in the subtitle field      | string |    none         |
  | minorTitleEnabled | The optional minor heading at the very right of the main title       | string |    false         |
  | minorTitleKey  | The objectname of the array to be taken to display in the minortitle field       | string |    none         |
  | limit           | Number thats limits the number of options displayed in the UI (if zero, options will not be limited)                                                             | number |       0        |
 
  



#### Output

  | Name         | Type      |          description                                               
  | ------------ |---------- |--------------------------------------------------------|
  | ```searchChange``` | Event    | Change event when typing in the input field     | 
  | ```valueSelect```  | Event    | Select event when a value is selected from dropdown     | 
  | ```blurInput ```   | Event    |Event once the input field is blurred     | 
  | ```clickInput```   | Event    | Click event upon clicking on the input field     | 

## Help Improve

Found a bug or an issue with this? [Open a new issue](https://github.com/SandeepBalachandran/ngx-sand-typeahead/issues) here on GitHub.


## Contribute
Please check the [**Contributing Guidelines**](https://github.com/SandeepBalachandran/ngx-sand-typeahead/blob/main/CONTRIBUTING.md) before contributing.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.
