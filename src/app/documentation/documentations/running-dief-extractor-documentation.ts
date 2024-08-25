import { Component, AfterViewInit} from '@angular/core';

declare var Prism: any;

@Component({
  selector: 'app-running-dief-extractor-documentation',
  templateUrl: './running-dief-extractor-documentation.html',
  styleUrls: ['../documentation.scss']
})
export class RunningDIEFDocumentationComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    Prism.highlightAll();
  }
  
}