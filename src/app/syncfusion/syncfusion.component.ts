import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  DocumentEditorComponent, PrintService, SfdtExportService, WordExportService, TextExportService, SelectionService,
  SearchService, EditorService, ImageResizerService, EditorHistoryService, ContextMenuService,
  OptionsPaneService, HyperlinkDialogService, TableDialogService, BookmarkDialogService, TableOfContentsDialogService,
  PageSetupDialogService, StyleDialogService, ListDialogService, ParagraphDialogService, BulletsAndNumberingDialogService,
  FontDialogService, TablePropertiesDialogService, BordersAndShadingDialogService, TableOptionsDialogService,
  CellOptionsDialogService, StylesDialogService
  } from '@syncfusion/ej2-angular-documenteditor';


@Component({
  selector: 'app-syncfusion',
  templateUrl: './syncfusion.component.html',
  styleUrls: ['./syncfusion.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [PrintService, SfdtExportService, WordExportService, TextExportService, SelectionService, SearchService, EditorService,
  ImageResizerService, EditorHistoryService, ContextMenuService, OptionsPaneService, HyperlinkDialogService, TableDialogService,
  BookmarkDialogService, TableOfContentsDialogService, PageSetupDialogService, StyleDialogService, ListDialogService,
  ParagraphDialogService, BulletsAndNumberingDialogService, FontDialogService, TablePropertiesDialogService,
  BordersAndShadingDialogService, TableOptionsDialogService, CellOptionsDialogService, StylesDialogService]
})
export class SyncfusionComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }

}
