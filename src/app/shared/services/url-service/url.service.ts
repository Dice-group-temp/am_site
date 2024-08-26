import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  readonly urls = {
    documentation: '',
    app: '',
    contact: '',
    dief_framework:'https://github.com/dbpedia/extraction-framework',
    amharic_databus_collection: 'https://databus.dbpedia.org/purplebee/collections/am_chapter/',
    amharic_mappings_wiki: 'https://mappings.dbpedia.org/index.php/Mapping_am',
    virtuosoEndpoint: 'https://virtuoso.am.dbpedia.nliwod.org/',
    qleverEndpoint: 'https://qlever-ui.dbpedia.nliwod.org',
    mappingsServer:''
    // Add more URLs here as needed
  };
  constructor() { }
}
