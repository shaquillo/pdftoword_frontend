import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pdf2html-ex',
  templateUrl: './pdf2html-ex.component.html',
  styleUrls: ['./pdf2html-ex.component.scss'],
  providers: [AppService]
})

export class Pdf2htmlEXComponent implements OnInit {

  filename: string;
  html_file_url: string;
  url_safe: SafeResourceUrl;

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

    // window.onload = function(){

    // }
  }

  setPdfEditable(){
    var pdf_frame =  document.getElementById('pdf') as HTMLFrameElement;
    console.log(pdf_frame);
    console.log(pdf_frame.contentWindow.document.getElementById('pf1'));
    pdf_frame.contentWindow.window.onload = function(){
      console.log(pdf_frame.contentWindow);
    pdf_frame.contentWindow.document.getElementById('pf1').onclick = function clickEvent(e) {
      // e = Mouse click event.

      let x = e.pageX; //x position within the element.
      let y = e.pageY  //y position within the element.
      console.log("Left? : " + x + " ; Top? : " + y + ".");
    
    
  const errorElem = pdf_frame.contentWindow.document.createElement('input');
    //errorElem.style.backgroundColor = '#ff0000';
    errorElem.style.top = y.toString()+'px'
    errorElem.style.left =x.toString()+'px'
    errorElem.style.position = 'absolute';
    //errorElem.zIndex = 900;

    document.getElementById('pf1').appendChild(errorElem);
  }
  }
    // = function clickEvent(e) {
    //   var ids = [];
    //   var cursorX;
    //   var cursorY;
    //   var i = 0;
    //   console.log(e.pageX, e.pageY);
    //   cursorX = e.pageX;
    //   cursorY = e.pageY;

    //   var text_input = pdf_frame.contentWindow.document.createElement('input');
    //   text_input.id = 'input' + i;
    //   ids.push(text_input.id);
    //   text_input.style.position = "absolute";
    //   text_input.style.left = cursorX + 'px';
    //   text_input.style.top = cursorY + 'px';
    //   // text_input.style.minWidth = '40px';
    //   // text_input.setAttribute('contentEditable', 'true');
    //   pdf_frame.contentWindow.document.body.appendChild(text_input);
    //   i += 1;
      
    // }
  }

  saveEditedHtml(): void {
    console.log('sending edited document to backend');
    let frame =  document.getElementById('pdf') as HTMLFrameElement;
    if(frame !== null) {
      // let html = '<!DOCTYPE html>\n<html xmlns="http://www.w3.org/1999/xhtml">\n' + frame.contentWindow.document.documentElement.innerHTML + '\n</html>';
      let html = frame.contentWindow.document.documentElement.innerHTML;

      //creating pdf file on client side and sending it to server
      // var opt = {
      //   margin:       1,
      //   filename:     'myfile.pdf',
      //   image:        { type: 'pdf', quality: 0.98 },
      //   html2canvas:  { scale: 2 },
      //   jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      // };

      // html2pdf().from(html).save();
      // html2pdf().from(html).set(opt).save();


      // creating html file and sending to server

      let blob = new Blob([html], {type: 'text/html'})        // "text/html;charset=utf-8"
      let html_file: File = this.blobToFile(blob, this.filename + '.html');

      // var file_url = URL.createObjectURL(html_file);
      //   window.open(file_url, '_blank');

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

  addText(): void {
    console.log('sending go to modification page');
    let frame =  document.getElementById('pdf') as HTMLFrameElement;
    if(frame !== null) {
      // let html = '<!DOCTYPE html>\n<html xmlns="http://www.w3.org/1999/xhtml">\n' + frame.contentWindow.document.documentElement.innerHTML + '\n</html>';
      let html = frame.contentWindow.document.documentElement.innerHTML;

      //creating pdf file on client side and sending it to server
      // var opt = {
      //   margin:       1,
      //   filename:     'myfile.pdf',
      //   image:        { type: 'pdf', quality: 0.98 },
      //   html2canvas:  { scale: 2 },
      //   jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      // };

      // html2pdf().from(html).save();
      // html2pdf().from(html).set(opt).save();


      // creating html file and sending to server

      let blob = new Blob([html], {type: 'text/html'})        // "text/html;charset=utf-8"
      let html_file: File = this.blobToFile(blob, this.filename + '.html');
      this.apiService.saveEditedHtml(html_file).subscribe(pdf_blob => {
        console.log(pdf_blob);
        this.router.navigate(['./pdftron']);
        // var pdf_url = URL.createObjectURL(pdf_blob);
        // window.open(pdf_url, '_blank');
        
      });

    }
  } 

}
