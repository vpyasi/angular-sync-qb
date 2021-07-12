import { GridModule } from '@syncfusion/ej2-angular-grids';

import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder';

import { SliderModule } from '@syncfusion/ej2-angular-inputs';

import { CheckBoxSelectionService, DropDownListModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';

import { CheckBoxModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
@NgModule({ declarations: [ AppComponent ], imports: [ BrowserModule, CommonModule, QueryBuilderModule,       SliderModule, MultiSelectModule, DropDownListModule, RadioButtonModule, CheckBoxModule,       GridModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
