import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SyncfusionComponent } from './syncfusion/syncfusion.component';
import { SyncfusionMoreComponent } from './syncfusion-more/syncfusion-more.component';
import { PdftronComponent } from './pdftron/pdftron.component';
import  { SejdaPdfComponent } from './sejda-pdf/sejda-pdf.component';
import { PdfLibComponent } from './pdf-lib/pdf-lib.component';
import { Pdf2htmlEXComponent } from './pdf2html-ex/pdf2html-ex.component';
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';

const routes: Routes = [
  { path:  '', redirectTo: '/syncfusion', pathMatch: 'full'},
  { path: 'syncfusion', component: SyncfusionComponent},
  { path: 'syncfusion-more', component: SyncfusionMoreComponent},
  { path: 'pdftron', component: PdftronComponent },
  { path: 'sejda', component: SejdaPdfComponent },
  // { path: 'pdf-lib', component: PdfLibComponent , children: [ {path: 'addText', component: PdftronComponent }, {path: 'modifyText', component: Pdf2htmlEXComponent} ]},
  { path: 'pdftron/edit', component: Pdf2htmlEXComponent }
  // { path: 'pdf2htmlEX', component: PdfviewerComponent, children: [ {path: 'edit', component: Pdf2htmlEXComponent } ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
