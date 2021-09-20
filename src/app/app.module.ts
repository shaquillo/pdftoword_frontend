import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import { ColorPickerModule } from 'ngx-color-picker';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Pdf2htmlEXComponent } from './pdf2html-ex/pdf2html-ex.component';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { FormsModule } from '@angular/forms';
import { PopoverModule } from 'ngx-smart-popover';

@NgModule({
  declarations: [
    AppComponent,
    Pdf2htmlEXComponent,
    CkeditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    MatSliderModule,
    MatIconModule,
    ColorPickerModule,
    CKEditorModule,
    PopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
