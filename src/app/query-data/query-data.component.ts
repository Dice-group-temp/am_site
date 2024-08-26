import { Component } from '@angular/core';
import { UrlService } from '../shared/services/url-service/url.service';
@Component({
  selector: 'app-query-data',
  templateUrl: './query-data.component.html',
  styleUrls: ['./query-data.component.scss']
})
export class QueryDataComponent {

  constructor(public urlService: UrlService){}
  openInNewTab(url: string):void{
    window.open(url, '_blank');
  }
}
