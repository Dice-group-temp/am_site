import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationLayoutComponent } from './documentation-layout/documentation-layout.component';
import { SparqlForBeginnersDocumentationComponent } from './documentations/sparql-for-beginners-documentation';
import { QueryAmharicDbpediaDocumentationComponent } from './documentations/query-amharic-dbpedia-documentation';
import { RunningDIEFDocumentationComponent } from './documentations/running-dief-extractor-documentation';

@NgModule({
  declarations: [
    DocumentationLayoutComponent,
    SparqlForBeginnersDocumentationComponent,
    QueryAmharicDbpediaDocumentationComponent,
    RunningDIEFDocumentationComponent,
  ],
  imports: [CommonModule, DocumentationRoutingModule, SharedModule],
})
export class DocumentationModule {}
