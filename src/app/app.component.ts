import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pdf-editors';

  navLinks = [
    {
      label: 'pdfEditor',
      link: './pdfeditor'
    },
    {
      label: 'pdfCKeditor',
      link: './pdfCKeditor'
    }
  ]
}
