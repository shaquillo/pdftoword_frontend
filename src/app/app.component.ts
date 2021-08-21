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
      label: 'pdftron',
      link: './pdftron'
    },
    {
      label: 'sejda',
      link: './sejda'
    },
    {
      label: 'pdf-lib',
      link: './pdf-lib'
    }
  ]
}
