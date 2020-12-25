import { NgModule } from '@angular/core';
import { SandTypeaheadComponent } from './sand-typeahead.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SandTypeaheadComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  exports: [SandTypeaheadComponent]
})
export class SandTypeaheadModule { }
