import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { AppService } from '../app.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pdf2html-ex',
  templateUrl: './pdf2html-ex.component.html',
  styleUrls: ['./pdf2html-ex.component.scss'],
  providers: [AppService]
})

export class Pdf2htmlEXComponent implements OnInit, AfterViewInit {

  @ViewChild('pdf')
  pdfFrame: ElementRef;

  filename: string;
  html_file_url: string;
  url_safe: SafeResourceUrl;

  public color: string = '#000000';
  public toggle: boolean = false;

  constructor(private apiService: AppService, private sanitizer: DomSanitizer, private router: Router) { 
    this.filename = 'f19-08-2021_16-21-20';
    // this.filename = 'feicom';
  }

  ngOnInit(): void {
    
    this.apiService.gethtmlfrompdf(this.filename).subscribe(blob => {
      this.html_file_url = URL.createObjectURL(blob);
      this.url_safe= this.sanitizer.bypassSecurityTrustResourceUrl(this.html_file_url);
      // this.setPdfEditable();
    });

  }

  ngAfterViewInit():void {
    var frame =  document.getElementById('pdf') as HTMLFrameElement;
    console.log(this.pdfFrame.nativeElement.contentWindow.document.body);
    console.log(frame.contentDocument.getElementById('pf1'));
  }

  saveEditedHtml(): void {
    console.log('sending edited document to backend');
    let frame =  document.getElementById('pdf') as HTMLFrameElement;
    if(frame !== null) {
      let html = frame.contentWindow.document.documentElement.innerHTML;

      let blob = new Blob([html], {type: 'text/html'})        // "text/html;charset=utf-8"
      let html_file: File = this.blobToFile(blob, this.filename + '.html');

      this.apiService.saveEditedHtml(html_file).subscribe(pdf_blob => {
        console.log(pdf_blob);
        var pdf_url = URL.createObjectURL(pdf_blob);
        window.open(pdf_url, '_blank');
      });

    }
  }

  blobToFile(blob: Blob, fileName:string): File {
    console.log('In blobToFile function blob: ' + blob);
    var b: any = blob;
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;

    //Cast to a File() type
    return <File>blob;
  } 

}
