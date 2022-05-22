import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menus: any[] = [
    { link: '/home', name: 'Home'},
    { link: '/timeline', name: 'Timeline'}
  ]
  isCollapsed = false;
  constructor() {

  }
}
