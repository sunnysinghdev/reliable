import { Component, OnInit } from '@angular/core';
import { AppCommonService } from '../app.common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  contents: any = {};
  constructor(public appService: AppCommonService) {
    this.appService.displayHeader = false;
    this.contents = this.appService.contents.about.content;
    console.log(this.contents);
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
