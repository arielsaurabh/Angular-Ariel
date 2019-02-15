import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'vr-toolbar-user-button',
  templateUrl: './toolbar-user-button.component.html',
  styleUrls: ['./toolbar-user-button.component.scss']
})
export class ToolbarUserButtonComponent implements OnInit, AfterViewInit {
  UserName: string;
  isOpen: boolean;

  constructor() { }

  ngOnInit() {
    this.UserName = localStorage.getItem('logedInUserName');

  }

  ngAfterViewInit() {
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }
  logOut(): any {
    localStorage.removeItem('logedInUserName');
    localStorage.removeItem('logedInUserEmail');
    localStorage.removeItem('isLoggedIn');
  }

}
