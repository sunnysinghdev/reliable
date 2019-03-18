import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {Observable } from 'rxjs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public name = '';
  public email = '';
  public phone = '';
  public message = '';
  loader: boolean = false;
  constructor(private http: Http) { }

  ngOnInit() {
  }
  sendMail(){
    var body = {
      id: "$pwd@9223",
      from: this.name,
      to: "sunnysingh.vpcoe@gmail.com",
      subject: "Home Inspection Query",
      message: this.name + "("+this.phone+ ", "+this.email +")" + " - [ " + this.message +" ]",
      cc:"Mritunjay <mritunjay15@gmail.com>"
  };
  this.loader = true;
    this.http.post('https://mailwaala.herokuapp.com/sendmail', body)
    .subscribe((elements) => {
      console.log(elements);
      this.loader = false;

    });
  }
}
