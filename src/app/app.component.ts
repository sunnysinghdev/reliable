import { Component } from '@angular/core';
import { AppCommonService } from './app.common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reliable';
  constructor(public appService: AppCommonService) {}
}
