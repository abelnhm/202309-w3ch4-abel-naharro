import { Component } from './component';
import '../style.css';

export class Header extends Component {
  title: string;
  constructor(selector: string, title: string) {
    super(selector);
    this.title = title;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<header class="main-header">
              <h1 class="main-title">${this.title}</h1>
            </header>`;
  }
}
