import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sejda-pdf',
  templateUrl: './sejda-pdf.component.html',
  styleUrls: ['./sejda-pdf.component.scss']
})
export class SejdaPdfComponent implements OnInit {

  link: String = 'https://www.sejda.com/pdf-editor?files=%5B%7B%22downloadUrl%22%3A%22https%3A%2F%2Fwww.sejda.com%2Fassets%2Fsample.pdf%22%7D%5D';

  constructor() { }

  ngOnInit(): void {
  }

}
