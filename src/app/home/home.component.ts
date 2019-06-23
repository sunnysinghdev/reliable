import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { AppCommonService } from '../app.common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public bannerHeight = (window.innerWidth * 370) / 1023;
  constructor(public appService: AppCommonService) { }

  ngOnInit() {
    this.appService.displayHeader = true;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.bannerHeight = (event.target.innerWidth * 370) / 1023;
  }
  ngOnDestroy() {
    this.appService.displayHeader = false;
  }
}
