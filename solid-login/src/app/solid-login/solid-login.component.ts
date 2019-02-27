import { Component, OnInit } from '@angular/core';
import { SolidLogin } from "../model/SolidLogin";

@Component({
  selector: 'app-solid-login',
  templateUrl: './solid-login.component.html',
  styleUrls: ['./solid-login.component.css']
})
export class SolidLoginComponent implements OnInit {

  negro: SolidLogin = new SolidLogin();

  constructor() { this.negro.popupLogin(); }

  ngOnInit() {
  }

}
