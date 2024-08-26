import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  jumpToSection(section: string | null) {
    console.log(section)
    if (section) document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
