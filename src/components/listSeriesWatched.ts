import { Component } from './component';
import { SeriesStructure } from '../models/series';

import '../style.css';

export class ListSeriesWatched extends Component {
  listSeries: SeriesStructure[];
  constructor(selector: string, listSeries: SeriesStructure[]) {
    super(selector);
    this.listSeries = listSeries;
    this.template = this.createTemplate();
    this.render();
  }

  getSeries(series: SeriesStructure[]) {
    const listWatched = series.filter((item) => item.watched === true);

    let listSeriesWatchedHTML = '';
    for (const serie of listWatched) {
      listSeriesWatchedHTML += `
      <li class="serie">
        <img class="serie__poster"
          src="${serie.poster}"
          alt="${serie.name} poster" />
        <h4 class="serie__title">${serie.name}</h4>
        <p class="serie__info">${serie.creator} (${serie.year})</p>
        <ul class="score">
          <li class="score__star">
            <i class="icon--score fas fa-star" title="1/5"></i>
          </li>
          <li class="score__star">
            <i class="icon--score fas fa-star" title="2/5"></i>
          </li>
          <li class="score__star">
            <i class="icon--score fas fa-star" title="3/5"></i>
          </li>
          <li class="score__star">
            <i class="icon--score fas fa-star" title="4/5"></i>
          </li>
          <li class="score__star">
            <i class="icon--score fas fa-star" title="5/5"></i>
          </li>
        </ul>
        <i class="fas fa-times-circle icon--delete"></i>
      </li>
      `;
    }

    return listSeriesWatchedHTML;
  }

  createTemplate() {
    return `
    <ul class="series-list">
    ${this.getSeries(this.listSeries)}
    </ul>
    `;
  }
}
