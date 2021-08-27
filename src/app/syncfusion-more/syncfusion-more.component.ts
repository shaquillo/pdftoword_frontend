import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DocumentEditorContainerComponent, ToolbarService } from '@syncfusion/ej2-angular-documenteditor';
import { AppService } from '../app.service';

@Component({
  selector: 'app-syncfusion-more',
  templateUrl: './syncfusion-more.component.html',
  styleUrls: ['./syncfusion-more.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ToolbarService, AppService]
})
export class SyncfusionMoreComponent implements OnInit {

  @ViewChild('document_editor')
  public container: DocumentEditorContainerComponent

  serviceLink: String;
  filename: String;

  constructor(private apiService: AppService) {
    this.serviceLink = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';
    this.filename = 'feicom';  // 'f19-08-2021_16-21-20';
   }

  ngOnInit(): void {
  }

  onCreate(): void {
    console.log('**********Document editor openned')
    this.apiService.getWordDoc(this.filename).subscribe(blob => {
      console.log(blob);
      this.loadFile(this.blobToFile(blob, this.filename + '.docx'));
    });
    console.log('end of onCreate');
  }

  loadFile(file: File): void {
    let ajax: XMLHttpRequest = new XMLHttpRequest();
    ajax.open('POST', 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/Import', true);
    ajax.onreadystatechange = () => {
        if (ajax.readyState === 4) {
            if (ajax.status === 200 || ajax.status === 304) {
                // open SFDT text in document editor
                this.container.documentEditor.open(ajax.responseText);
            }
        }
    }
    let formData: FormData = new FormData();
    formData.append('files', file);
    ajax.send(formData);
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
