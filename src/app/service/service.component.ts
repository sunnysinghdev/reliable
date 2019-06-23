import { Component, OnInit } from '@angular/core';
import { AppCommonService } from '../app.common.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  contents: any = {};
  constructor(public appService: AppCommonService) {
    this.appService.displayHeader = false;
    this.contents = this.appService.contents.service.content;
   }

  ngOnInit() {
  }
  getPara(lines: any) {
    let para = "";
    // tslint:disable-next-line:forin
    for (var index in lines) {
      para += lines[index];
    }
    return para;
  }
  getImage(img: any) {
    return './assets/' + img;
  }
}
