import { Component } from './component';
import '../style.css';

export class Section extends Component {
  title: string;
  constructor(selector: string, title: string) {
    super(selector);
    this.title = title;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
      <section class="series">
        <h2 class="section-title">${this.title}</h2>
      </section>
    `;
  }
}
