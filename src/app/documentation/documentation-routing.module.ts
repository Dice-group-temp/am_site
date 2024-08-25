import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationLayoutComponent } from './documentation-layout/documentation-layout.component';
import { SparqlForBeginnersDocumentationComponent } from './documentations/sparql-for-beginners-documentation';
import { QueryAmharicDbpediaDocumentationComponent } from './documentations/query-amharic-dbpedia-documentation';

import { RunningDIEFDocumentationComponent } from './documentations/running-dief-extractor-documentation';

const routes: Routes = [
  {
    path: '',
    component: DocumentationLayoutComponent, // Main layout for documentation page
    children: [
      {
        path: 'sparql-for-beginners',
        component: SparqlForBeginnersDocumentationComponent,
      },
      {
        path: 'query-am-dbpedia',
        component: QueryAmharicDbpediaDocumentationComponent,
      },
      {
        path: 'running-dief-extractor',
        component: RunningDIEFDocumentationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentationRoutingModule {}
