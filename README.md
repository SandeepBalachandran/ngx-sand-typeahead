<!-- ![](./images/preview.png) -->
<h1 align='center'>ngx-sand-typeahead</h1>

<h3 align="center"> An angular typeahead package</h3>
<br>
<p align="center"> 
  <a href="https://github.com/SandeepBalachandran/ngx-sand-typeahead/releases/" target="_blank">
    <img alt="GitHub release" src="https://img.shields.io/github/v/release/SandeepBalachandran/ngx-sand-typeahead?include_prereleases&style=flat-square">
  </a> 

  <a href="https://github.com/SandeepBalachandran/ngx-sand-typeahead/commits/master" target="_blank">
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

## Features
* Type and search at the same time
* Easy to customize
* Plug and play feature
* Limit number of items displayed in dropdown

## Example

## Installation

```cmd
npm install ngx-sand-typeahead
```
* After installation import SelectDropDownModule into your root or feature module

```cmd
import { SandTypeaheadModule } from 'sand-typeahead';
```
* Add ``` SandTypeaheadModule``` to the imports of your NgModule

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

* Use  ```<ngx-sand-typeahead></ngx-sand-typeahead> ``` in your templates to add the custom dropdown in your view like below

```ts
  <ngx-sand-typeahead (searchChange)="onSearch($event)" (valueSelect)="onSelect($event)" (blurInput)="onBlur($event)"
    (clickInput)="onClick($event)" [options]="dropdowndata" [settings]="settings">
  </ngx-sand-typeahead>
 ```
### Settings

#### Input
* ```options:Array``` - Array of string/objects that are to be the dropdown options. 
* ```settings:Object``` - Settings object
  * displayKey - The objectname of the array to be taken to display in the dropdown
  * placeholder - Placeholder for the input field
  * height - Height of the dropdown (px)
  

```cmd
  settings = {
    displayKey: 'name',
    placeholder: 'Input here',
    height: '300'
  };
```

#### Output
* ``` searchChange: Event  ``` - Change event when typing in the input field
* ``` valueSelect: Event ``` - Select event when a value is selected from dropdown
* ``` blurInput: Event ``` - Event once the input field is blurred
* ``` clickInput:Event ``` - Click event upon clicking on the input field.
# Contribute
Please check the [**Contributing Guidelines**](https://github.com/SandeepBalachandran/ngx-sand-typeahead/blob/master/CONTRIBUTING.md) before contributing.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.
