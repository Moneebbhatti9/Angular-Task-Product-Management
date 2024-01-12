import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Languages, notifications, userItems } from './dummy-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() collapsed: boolean = false;
  @Input() screenWidth: number = 0;

  canShowSearchBarAsOverlay: boolean = false;
  selectedLanguage: any;

  Language = Languages;
  notification = notifications;
  userItem = userItems;

  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkcanShowSearchBarAsOverlay(window.innerWidth);
  }

  ngOnInit(): void {
    this.checkcanShowSearchBarAsOverlay(window.innerWidth);
    this.selectedLanguage = this.Language[0];
  }

  getHeaderClass = (): string => {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  };

  checkcanShowSearchBarAsOverlay(innerWidth: number): void {
    if (innerWidth < 845) {
      this.canShowSearchBarAsOverlay = true;
    } else {
      this.canShowSearchBarAsOverlay = false;
    }
  }
}
