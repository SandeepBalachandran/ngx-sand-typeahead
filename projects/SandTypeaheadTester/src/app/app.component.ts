import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public service: AppService, private _fb: UntypedFormBuilder) {
    this.reactiveForm = _fb.group({
      name: [{ value: '' }, Validators.required]
    });
  }
  title = 'SandTypeaheadTester';
  reactiveForm: UntypedFormGroup;
  dropdowndata: any = [];
  searchText: any;
  disabled: any;
  settings = {
    displayKey: 'name',
    placeholder: 'Input here',
    inputDirection: 'ltr',
    height: 300,
    limit: 20,
    subTitleEnabled: true,
    subTitleKey: 'region',
    minorTitleEnabled: true,
    minorTitleKey: 'population',
    noDataText:"User defined text"
  };
  ngOnInit(): void {
    this.service.allData().subscribe(
      (data) => {
        this.dropdowndata = data;
      },
      (error) => {

      },
      () => {

      }
    );

  }

  onClick(event): void {
  }

  onBlur(event): void {
    console.log(event);
  }
  onSearch(event): void {
    console.log(event);
    this.service.populateData(event.keyword).subscribe(
      (data) => {
        // this.dropdowndata = data;
      },
      (error) => {

      },
      () => {

      }
    );
  }
  onSelect(data): void {
    this.searchText = data;
    // this.disabled = false;
  }

  submitReactiveForm() {
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm.value);
    }
  }
}
