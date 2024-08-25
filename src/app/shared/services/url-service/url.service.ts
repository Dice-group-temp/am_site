import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  readonly urls = {
    documentation: '',
    app: '',
    contact: '',
    amharic_databus_collection: 'https://databus.dbpedia.org/purplebee/collections/am_chapter/',
    virtuosoEndpoint: 'virtuoso.am.dbpedia.nliwod.org',
    qleverEndpoint: 'qlever-ui.dbpedia.nliwod.org',
    mappingsServer:'http://localhost:9999/server/'
    // Add more URLs here as needed
  };
  constructor() { }
}
