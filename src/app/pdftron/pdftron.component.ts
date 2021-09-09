import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import WebViewer from '@pdftron/webviewer';

// declare const WebViewer: any;

@Component({
  selector: 'app-pdftron',
  templateUrl: './pdftron.component.html',
  styleUrls: ['./pdftron.component.scss'],
  providers: [AppService]
})
export class PdftronComponent implements OnInit, AfterViewInit {

  filename: string;

  @ViewChild('viewer') viewer: ElementRef;

  wvInstance: any;
  @Output() coreControlsEvent:EventEmitter<any> = new EventEmitter(); 

  private documentLoaded$: Subject<void>;

  constructor(private apiService: AppService, private router: Router, private zone: NgZone) {
    this.documentLoaded$ = new Subject<void>();
    this.filename = 'f19-08-2021_16-21-20.pdf';
    // this.filename = 'cv.pdf';
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    WebViewer({
      path: '../assets/lib',
      initialDoc: 'http://localhost:8000/getpdf/?filename=' + this.filename //'../assets/pdf/word.docx'
  }, this.viewer.nativeElement)
      .then(instance => {
        this.wvInstance = instance;

        this.coreControlsEvent.emit(instance.UI.LayoutMode.Single);
  
        const { documentViewer, Annotations, annotationManager } = instance.Core;
  
        // instance.UI.openElements(['notesPanel']);

        instance.UI.setHeaderItems(header => {
          header.push({
              type: 'actionButton',
              title: 'save',
              img: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>',
              onClick: async () => {
                const doc = documentViewer.getDocument();
                const xfdfString = await annotationManager.exportAnnotations();
                const data = await doc.getFileData({
                  // saves the document with annotations in it
                  xfdfString
                });
                const arr = new Uint8Array(data);
                const blob = new Blob([arr], { type: 'application/pdf' });

                let pdf_file: File = this.blobToFile(blob, this.filename);
                this.apiService.saveEditedPdf(pdf_file).subscribe(pdf_blob => {
                  console.log(pdf_blob);
                  var pdf_url = URL.createObjectURL(pdf_blob);
                  // alert('pd')
                  window.open(pdf_url, '_blank');
                });

                // add code for handling Blob here
              }
          }
        );
         
        header.push({
            type: 'actionButton',
            img: '/assets/images/pencil.svg',
            title: 'modify text',
            onClick: async () => {
              const doc = documentViewer.getDocument();
              const xfdfString = await annotationManager.exportAnnotations();
              const data = await doc.getFileData({
                // saves the document with annotations in it
                xfdfString
              });
              const arr = new Uint8Array(data);
              const blob = new Blob([arr], { type: 'application/pdf' });

              let pdf_file: File = this.blobToFile(blob, this.filename);
              this.apiService.saveEditedPdf(pdf_file).subscribe(pdf_blob => {
                console.log(pdf_blob);
                this.zone.run(() => {this.router.navigate(['./pdftron/edit'])});
                // var pdf_url = URL.createObjectURL(pdf_blob);
                // alert('pd')
                // window.open(pdf_url, '_blank');
              });

              // add code for handling Blob here
            }
          });

        });

        // documentViewer.addEventListener('annotationsLoaded', () => {
        //   console.log('annotations loaded');
        // });
  
        // documentViewer.addEventListener('documentLoaded', () => {
        //   this.documentLoaded$.next();
        //   const rectangleAnnot = new Annotations.RectangleAnnotation({
        //     PageNumber: 1,
        //     // values are in page coordinates with (0, 0) in the top left
        //     X: 100,
        //     Y: 150,
        //     Width: 200,
        //     Height: 50,
        //     Author: annotationManager.getCurrentUser()
        //   });
        //   annotationManager.addAnnotation(rectangleAnnot);
        //   annotationManager.redrawAnnotation(rectangleAnnot);
        // });
      });
  
  }

  getDocumentLoadedObservable() {
    return this.documentLoaded$.asObservable();
  }

  modifyText(): void {
    
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
