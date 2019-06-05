import { Component } from '@angular/core';
import { IShowResult } from './ishow-result';
import { ShowService } from './show/show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show-app';
  showResult: IShowResult
  constructor(private showService: ShowService) {
  }
  doSearch(searchValue) {
    if (searchValue) {
      const userInput = searchValue.split(',').map(s => s.trim());
      this.showService.getShowResult(userInput[0]).subscribe(data => this.showResult = data)
      //(userInput[0], userInput.length > 1 ? userInput[1] : undefined)
    }
  }
}