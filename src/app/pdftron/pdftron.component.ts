import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import WebViewer from '@pdftron/webviewer';

// declare const WebViewer: any;

@Component({
  selector: 'app-pdftron',
  templateUrl: './pdftron.component.html',
  styleUrls: ['./pdftron.component.scss']
})
export class PdftronComponent implements OnInit, AfterViewInit {

  @ViewChild('viewer') viewer: ElementRef;

  wvInstance: any;
  @Output() coreControlsEvent:EventEmitter<any> = new EventEmitter(); 

  private documentLoaded$: Subject<void>;

  constructor() {
    this.documentLoaded$ = new Subject<void>();
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    WebViewer({
      path: '../assets/lib',
      initialDoc: '../assets/pdf/word.docx'
  }, this.viewer.nativeElement)
      .then(instance => {
        this.wvInstance = instance;

        this.coreControlsEvent.emit(instance.UI.LayoutMode.Single);
  
        const { documentViewer, Annotations, annotationManager } = instance.Core;
  
        instance.UI.openElements(['notesPanel']);
  
        documentViewer.addEventListener('annotationsLoaded', () => {
          console.log('annotations loaded');
        });
  
        documentViewer.addEventListener('documentLoaded', () => {
          this.documentLoaded$.next();
          const rectangleAnnot = new Annotations.RectangleAnnotation({
            PageNumber: 1,
            // values are in page coordinates with (0, 0) in the top left
            X: 100,
            Y: 150,
            Width: 200,
            Height: 50,
            Author: annotationManager.getCurrentUser()
          });
          annotationManager.addAnnotation(rectangleAnnot);
          annotationManager.redrawAnnotation(rectangleAnnot);
        });
      });
  
  }

  getDocumentLoadedObservable() {
    return this.documentLoaded$.asObservable();
  }

}
