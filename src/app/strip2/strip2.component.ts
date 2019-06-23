import { Component, OnInit } from '@angular/core';
import { AppCommonService } from '../app.common.service';

@Component({
  selector: 'app-strip2',
  templateUrl: './strip2.component.html',
  styleUrls: ['./strip2.component.scss']
})
export class Strip2Component implements OnInit {

  contact: any = {};
  constructor(public appService: AppCommonService) {
   }

  ngOnInit() {
    setTimeout(() => {
    this.contact = this.appService.contents.contact;
    },
    500
    );

  }

}
