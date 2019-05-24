import { Component, OnInit } from '@angular/core';
import { IShowResult } from '../ishow-result';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit {
  tv: IShowResult

  constructor() {
    // update dummy data based on http://api.tvmaze.com/search/shows?q=girls
    this.tv = {
      title: "Girls",
      rating: 6.7,
      genres: "Drama, Romance",
      runtime: 30,
      schedule: "22:00",
      timezone: "America/New_York",
      officialSite: "http://www.hbo.com/girls",
      summary: "This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg"
    }
  }

  ngOnInit() {
  }

}
