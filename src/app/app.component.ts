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
      label: 'syncfusion',
      link: './syncfusion'
    },
    {
      label: 'syncfusion-more',
      link: './syncfusion-more'
    },
    {
      label: 'sejda',
      link: './sejda'
    },
    {
      label: 'pdfEditor',
      link: './pdftron'
    },
    // {
    //   label: 'pdfEditor',
    //   link: './pdf-lib'
    // },
    // {
    //   label: 'pdf2htmlEX',
    //   link: './pdf2htmlEX'
    // }
  ]
}
