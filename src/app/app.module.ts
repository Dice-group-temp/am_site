import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiteContainerComponent } from './site-container/site-container.component';
import { ResourcesComponent } from './resources/resources.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { QueryDataComponent } from './query-data/query-data.component';
import { AboutProjectComponent } from './about-project/about-project.component';
import { DocumentationSectionComponent } from './documentation-section/documentation-section.component';
@NgModule({
  declarations: [
    AppComponent,
    SiteContainerComponent,
    ResourcesComponent,
    ContactUsComponent,
    QueryDataComponent,
    AboutProjectComponent,
    DocumentationSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
