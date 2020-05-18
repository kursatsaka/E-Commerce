import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop';
  selectedComponent = '';

  renderComponent() {}

  constructor() {}

  changeComponent(componentName: string) {
    this.selectedComponent = componentName;
  }

}
