import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public service: AppService) {}
  title = 'SandTypeaheadTester';
  dropdowndata: any = [];
  searchText: any;
  disabled: any;
  settings = {
    displayKey: 'name',
    placeholder: 'Input here',
    inputDirection: 'ltr',
    height: '300',
    limit:20
  };
  ngOnInit(): void {

  }

  onClick(event): void{
   console.log(event);
  }

  onBlur(event): void {
    console.log(event);
  }
  onSearch(event): void {
    console.log(event);
    this.service.populateData(event).subscribe(
      (data) => {
        this.dropdowndata = data
        console.log(this.dropdowndata);
      },
      (error) => {

      },
      () => {

      }
    );
  }
  onSelect(data): void {
    console.log(data)
    this.searchText = data;
    this.disabled =false;
    this.dropdowndata = [];
  }
}
