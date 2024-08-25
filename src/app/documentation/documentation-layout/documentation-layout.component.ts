import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-documentation-layout',
  templateUrl: './documentation-layout.component.html',
  styleUrls: ['./documentation-layout.component.scss']
})


export class DocumentationLayoutComponent {

  sideNavItems = [
    {id:0, name:'Basics of Sparql', link:'/documentations/sparql-for-beginners'},
    {id:1, name:'Querying Amharic DBpedia', link:'/documentations/query-am-dbpedia'},
    {id:2, name:'Running DIEF Framework', link:'/documentations/running-dief-extractor'},
    ];

  selectedIndex: number | null = null;

  selectItem(index: number): void {
    this.selectedIndex = index;
  }

}
