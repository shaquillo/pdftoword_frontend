import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.component.html',
  styleUrls: ['./pdfviewer.component.scss']
})
export class PdfviewerComponent implements OnInit {

  pdf_link: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  editPdf(): void {
    
  }

}
