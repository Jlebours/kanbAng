import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  items!: MenuItem[];
  activeItem!: MenuItem;

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.items = [
        {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/', routerLinkActiveOptions: 'active'},
        {label: 'Get User', icon: 'pi pi-fw pi-user', routerLink: '/getUser', routerLinkActiveOptions: 'active'},
        {label: 'New User', icon: 'pi pi-fw pi-user-plus', routerLink: '/postUser', routerLinkActiveOptions: 'active'},
        {label: 'Remove User', icon: 'pi pi-fw pi-user-minus', routerLink: '/removeUser', routerLinkActiveOptions: 'active'}
    ];
    this.activeItem = this.items[0];
  }
}
