import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  images = [
    {title:'Search', path:'../../assets/img/DBpedia-Logo.png', alt:''},
    {title:'Search', path:'../../assets/img/GSOC_logo.png',alt:''},
    {title:'Search', path:'../../assets/img/university_Leipzig_logo.png', alt:''},
    {title:'Search', path:'../../assets/img/upb-logo-de.svg',alt:''},
    {title:'Search', path:'../../assets/img/leuphana_logo.png',alt:''},
  ]
}
