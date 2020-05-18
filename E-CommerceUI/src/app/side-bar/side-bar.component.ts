import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SideBar } from '../models/SideBar';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Output() changed = new EventEmitter<string>();
  constructor(private sideBarService: SidebarService) { }
  sidebar: SideBar[];
  selectedComponent: string;
  ngOnInit() {

    this.sideBarService.getSideBarMenu().subscribe(data => {
      this.sidebar = data;
    });
  }

  sendToComponentName(componentName: string) {
    this.changed.emit(componentName);
    this.selectedComponent = componentName;
  }

}
