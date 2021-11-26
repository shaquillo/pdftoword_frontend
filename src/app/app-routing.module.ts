import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pdf2htmlEXComponent } from './pdf2html-ex/pdf2html-ex.component';
// import { CkeditorComponent } from './ckeditor/ckeditor.component';

const routes: Routes = [
  { path:  '', redirectTo: '/pdfeditor', pathMatch: 'full'},
  { path: 'pdfeditor', component: Pdf2htmlEXComponent },
  // { path: 'pdfCKeditor', component: CkeditorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
