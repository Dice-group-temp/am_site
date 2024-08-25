import { Component, AfterViewInit } from '@angular/core';

declare var Prism: any;

@Component({
  selector: 'app-sparql-for-beginners-documentation',
  templateUrl: './sparql-for-beginners-documentation.html',
  styleUrls: ['../documentation.scss']
})

export class SparqlForBeginnersDocumentationComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    Prism.highlightAll();
  }
  
}

