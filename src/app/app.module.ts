import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { FormsModule } from '@angular/forms';
import { KnowComponent } from './know/know.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { AppCommonService } from './app.common.service';
import { Strip2Component } from './strip2/strip2.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServiceComponent,
    KnowComponent,
    SlideShowComponent,
    Strip2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    AppCommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
