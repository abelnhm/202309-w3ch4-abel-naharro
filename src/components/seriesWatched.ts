import { Component } from './component';
import '../style.css';

export class SeriesWatched extends Component {
  title: string;
  subtitle: string;
  constructor(selector: string, title: string, subtitle: string) {
    super(selector);
    this.title = title;
    this.subtitle = subtitle;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
        <section class="series-watched">
          <h3 class="subsection-title">${this.title}</h3>
          <p class="info">${this.subtitle}</p>
        </section>
    `;
  }
}
