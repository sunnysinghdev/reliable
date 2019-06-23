import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root',
})
export class AppCommonService {

    displayHeader = true;
    contents: any = {};
    constructor(public http: Http) {
        this.getContents();
    }
    getContents() {
        this.http.get('assets/contents.json').subscribe(
            res => {
                console.log(res.text());
                this.contents = JSON.parse(res.text());
            }
        );
    }

}
