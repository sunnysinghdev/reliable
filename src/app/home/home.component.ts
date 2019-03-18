import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public bannerHeight = (window.innerWidth * 370) / 1023;
  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.bannerHeight = (event.target.innerWidth * 370) / 1023;
  }
}
