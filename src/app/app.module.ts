import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PreviweComponent } from './previwe/previwe.component';
import { SerchrandomfilmComponent } from './serchrandomfilm/serchrandomfilm.component';
import { ShowfilmComponent } from './showfilm/showfilm.component';

import { SerchrandomfilmService } from './shared/serchrandomfilm.service';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { SelectAutocompleteModule } from 'mat-select-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    PreviweComponent,
    SerchrandomfilmComponent,
    ShowfilmComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    SelectAutocompleteModule,



   
  ],
  providers: [SerchrandomfilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
