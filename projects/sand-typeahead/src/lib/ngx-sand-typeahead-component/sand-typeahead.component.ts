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

@Component({
  selector: 'ngx-sand-typeahead',
  templateUrl: './sand-typeahead.component.html',
  styleUrls: ['./sand-typeahead.component.scss']
})
export class SandTypeaheadComponent implements OnInit, OnChanges {
  dropdowndata: any = [];
  searchText: any;

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
  @Input() public settings: any = {};


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
    }
    this.settingsInit();
  }
  /**
   *  ngonchanges update the variable with incoming data.
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.dropdowndata = this.options || [];
    this.settingsInit();
  }
  /**
   * The event upon clicking on the input field.
   */
  onClick(): void {
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
   */
  onSearch(): void {
    this.searchChange.emit(this.searchText);

  }
  /**
   * The event upon selecting a value from thd dropdown".
   */
  onSelect(data, index): void {
    this.searchText = data.name;
    this.valueSelect.emit({index, value: data });
    this.dropdowndata = [];
  }
  /**
   * The event upon clicking outside the input box will hide the dropdown and empties the array.
   */

  @HostListener('document:click', ['$event']) onDocumentClick(event): void {
    this.dropdowndata = [];
  }

  /**
   * The event upon clicking outside the input box will hide the dropdown and empties the array.
   */

  @HostListener('blur', ['$event']) public blur(): void {
    this.dropdowndata = [];
  }

  /**
   * initialize the config and other properties
   */
  private settingsInit(): void {
    const settings: any = {
      inputDirection: 'ltr',
      displayKey: 'name',
      placeholder: 'Input here',
      height: '300',
      limit: 0
    };
    if (this.settings === 'undefined' || Object.keys(this.settings).length === 0) {
      this.settings = { ...settings };
    }
    for (const key of Object.keys(settings)) {
      this.settings[key] = this.settings[key] ? this.settings[key] : settings[key];
    }
    this.settings = { ...this.settings };
  }
}
