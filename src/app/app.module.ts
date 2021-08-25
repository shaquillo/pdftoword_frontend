import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
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
import { Pdf2htmlEXComponent } from './pdf2html-ex/pdf2html-ex.component';

@NgModule({
  declarations: [
    AppComponent,
    SyncfusionComponent,
    PdfFileEditorComponent,
    SyncfusionMoreComponent,
    PdfLibComponent,
    PdftronComponent,
    SejdaPdfComponent,
    Pdf2htmlEXComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatButtonModule,
    DocumentEditorAllModule,
    DocumentEditorContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
