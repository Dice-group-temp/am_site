import { Component } from '@angular/core';
import { UrlService } from '../shared/services/url-service/url.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent {

  constructor(private urlService:UrlService){

  }
openInNewTab(url: string):void{
    window.open(url, '_blank');
  }
}
