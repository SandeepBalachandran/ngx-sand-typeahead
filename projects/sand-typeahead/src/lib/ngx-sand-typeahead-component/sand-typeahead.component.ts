import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import {
  OnChanges,
  SimpleChanges,
  ViewChildren,
  ElementRef,
  QueryList,
  AfterViewInit,
  ChangeDetectorRef,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Settings } from '../models/settings.model';

@Component({
  selector: 'ngx-sand-typeahead',
  templateUrl: './sand-typeahead.component.html',
  styleUrls: ['./sand-typeahead.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SandTypeaheadComponent),
      multi: true
    }
  ],
})
export class SandTypeaheadComponent implements OnInit, OnChanges , ControlValueAccessor {
  dropdowndata: any = [];
  tempData: any = [];
  searchText: any;
  isOpen: any;

  /**
   * input field disabled or not
   */
  @Input() public disabled: boolean;

  /**
   * Get the required values to display
   */
  @Input() public options: any = [];

  /**
   * Get the required settings to display
   */
  @Input() public settings: Settings = {};


  /**
   * Select event when user select a value from list
   */
  @Output() public valueSelect: EventEmitter<any> = new EventEmitter();

  /**
   * Change event upon user searching in the input field
   */
  @Output() public searchChange: EventEmitter<any> = new EventEmitter();

  /**
   * onblur event from input field
   */
  @Output() public blurInput: EventEmitter<any> = new EventEmitter();

  /**
   * onclick in input text field
   */
  @Output() public clickInput: EventEmitter<any> = new EventEmitter();
  clicked: any;


  constructor() { }
  /**
   * ngoninit checks whether there is data avilable to show dropdown.
   */
  ngOnInit(): void {
    if (typeof this.options !== 'undefined' && Array.isArray(this.options)) {
      this.dropdowndata = this.options;
      this.tempData = this.options;
    }
    this.settingsInit();
  }
  /**
   *  ngonchanges update the variable with incoming data.
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.dropdowndata = this.options;
    this.tempData = this.options;
    this.settingsInit();
  }
  /**
   * Propagates new value when model changes
   */
  propagateChange: any = () => {
  }

  onTouched: any = () => {
  }
  /**
   * Writes a new value from the form model into the view,
   * Updates model
   */
  writeValue(value: any): void {
    if (value) {

    }
  }
  /**
   * Registers a handler that is called when something in the view has changed
   */
  registerOnChange(fn): void {
    this.propagateChange = fn;

  }

  /**
   * Registers a handler specifically for when a control receives a touch event
   */
  registerOnTouched(fn: () => void): void {

  }




  /**
   * The event upon clicking on the input field.
   */
  onClick(): void {
    this.isOpen = true;
    this.clicked = true;
    this.clickInput.emit(this.clicked);
  }
  /**
   * The event upon focus out the input field".
   */
  onBlur(): void {
    this.clicked = false;
    this.blurInput.emit(this.clicked);
  }
  /**
   * The event upon user start searching on the input field".
   * Also the function will filter the data if it is available according to the search text
   */
  onSearch(): void {
    this.propagateChange(this.searchText);
    let tempDropdowndata  = this.tempData;
    if (this.searchText !== '') {
      this.isOpen = true;
      if (typeof tempDropdowndata !== 'undefined' && tempDropdowndata.length !== 0 ) {
        tempDropdowndata = tempDropdowndata.filter((item: any) => {
          return item[this.settings.displayKey].toLowerCase().indexOf(this.searchText.toLowerCase()) > -1;
        });
      }
    } else {
      this.isOpen = false;
    }
    this.dropdowndata = tempDropdowndata;

    const returnObj = {keyword: this.searchText, values: this.dropdowndata};
    this.searchChange.emit(returnObj);
  }
  /**
   * The event upon selecting a value from thd dropdown".
   */
  onSelect(data, index): void {
    this.searchText = data.name;
    this.propagateChange({ index, value: data });
    this.isOpen = false;
    this.valueSelect.emit({ index, value: data });
  }
  /**
   * The event upon clicking outside the input box will hide the dropdown and empties the array.
   */

  @HostListener('document:click', ['$event']) onDocumentClick(event): void {
    this.isOpen = false;
  }

  /**
   * The event upon clicking outside the input box will hide the dropdown and empties the array.
   */

  @HostListener('blur', ['$event']) public blur(): void {

  }

  /**
   * initialize the config and other properties
   */
  private settingsInit(): void {
    const settings: Settings = {
      inputDirection: 'ltr',
      displayKey: 'name',
      placeholder: 'Input here',
      height: '300',
      limit: 0,
      subtitleEnabled: false,
      subTitleKey: '',
      minorTitleEnabled: false,
      minorTitleKey: '',
      heading: ''
    };
    // if incoming settings object is empty , it will be initialized with predefiened values.
    if (this.settings === 'undefined' || Object.keys(this.settings).length === 0) {
      this.settings = { ...settings };
    }
    // Replacing predifined values by incoming values.
    // If no incoming value, predefined value will be taken
    for (const key of Object.keys(settings)) {
      this.settings[key] = this.settings[key] ? this.settings[key] : settings[key];
    }
    this.settings = { ...this.settings };
  }
}
