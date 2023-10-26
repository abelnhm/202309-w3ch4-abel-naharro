export type SeriesStructure = {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;
};

export class Serie {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;

  constructor(
    id: number,
    name: string,
    creator: string,
    year: number,
    poster: string,
    watched: boolean,
    score: number,
    emmies: number
  ) {
    this.id = id;
    this.name = name;
    this.creator = creator;
    this.year = year;
    this.poster = poster;
    this.watched = watched;
    this.score = score;
    this.emmies = emmies;
  }
}
