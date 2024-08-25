import { Component, AfterViewInit } from '@angular/core';

declare var Prism: any;

@Component({
  selector: 'app-amahric-for-beginners-documentation',
  templateUrl: './query-amharic-dbpedia-documentation.html',
  styleUrls: ['../documentation.scss']
})
export class QueryAmharicDbpediaDocumentationComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    Prism.highlightAll();
  }
  
}
