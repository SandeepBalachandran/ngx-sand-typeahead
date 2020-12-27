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
    height: '300'
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
        this.dropdowndata = data.splice(0, 10);
        console.log(this.dropdowndata);
      },
      (error) => {

      },
      () => {

      }
    );
  }
  onSelect(data): void {
    this.searchText = data;
    this.disabled =false;
    this.dropdowndata = [];
  }
}
