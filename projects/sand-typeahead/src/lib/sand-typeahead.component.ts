
// @Component({
//   selector: 'lib-SandTypeahead',
//   template: `
//     <p>
//       sand-typeahead works!
//     </p>
//   `,
//   styles: [
//   ]
// })
// export class SandTypeaheadComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
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
  // @Input() public disabled: boolean;

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

  ngOnInit(): void {
    if (typeof this.options !== 'undefined' && Array.isArray(this.options)) {
      this.dropdowndata = this.options;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.dropdowndata = this.options || [];
  
  }
  onClick(): void {
    this.clicked = true;
    this.clickInput.emit(this.clicked);
  }

  onBlur(): void {
    this.clicked = false;
    this.blurInput.emit(this.clicked);
  }
  onSearch(): void {
    this.searchChange.emit(this.searchText);

  }
  onSelect(data): void {
    this.searchText = data;
    this.valueSelect.emit({ value: data });
    this.dropdowndata = [];
  }

  @HostListener('document:click', ['$event']) onDocumentClick(event) {
    this.dropdowndata = [];
  }

  @HostListener('blur', ['$event']) public blur() {
    this.dropdowndata = [];
  }

}
