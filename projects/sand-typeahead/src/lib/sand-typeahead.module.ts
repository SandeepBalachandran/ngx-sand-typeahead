import { NgModule } from '@angular/core';
import { SandTypeaheadComponent } from './ngx-sand-typeahead-component/sand-typeahead.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LimitToPipe } from './pipes/limit-to.pipe';



@NgModule({
  declarations: [SandTypeaheadComponent, LimitToPipe],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  exports: [SandTypeaheadComponent,LimitToPipe]
})
export class SandTypeaheadModule { }
