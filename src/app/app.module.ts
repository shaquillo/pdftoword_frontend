import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { DocumentEditorAllModule, DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SyncfusionComponent } from './syncfusion/syncfusion.component';
import { PdfFileEditorComponent } from './pdf-file-editor/pdf-file-editor.component';
import { SyncfusionMoreComponent } from './syncfusion-more/syncfusion-more.component';
import { PdfLibComponent } from './pdf-lib/pdf-lib.component';
import { PdftronComponent } from './pdftron/pdftron.component';
import { SejdaPdfComponent } from './sejda-pdf/sejda-pdf.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SyncfusionComponent,
    PdfFileEditorComponent,
    SyncfusionMoreComponent,
    PdfLibComponent,
    PdftronComponent,
    SejdaPdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    DocumentEditorAllModule,
    DocumentEditorContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
