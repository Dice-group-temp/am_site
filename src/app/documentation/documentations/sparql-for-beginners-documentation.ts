import { Component, AfterViewInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

declare var Prism: any;

@Component({
  selector: 'app-sparql-for-beginners-documentation',
  templateUrl: './sparql-for-beginners-documentation.html',
  styleUrls: ['../documentation.scss'],
})
export class SparqlForBeginnersDocumentationComponent implements AfterViewInit {
  constructor(private clipboard: Clipboard) {}

  copyToClipboard(location: string) {
    const copied = this.clipboard.copy(location);
    if (copied) {
      console.log('copied');
    }
  }
  ngAfterViewInit(): void {
    Prism.highlightAll();
  }
}
