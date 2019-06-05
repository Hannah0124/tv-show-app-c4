import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ShowService } from '../show/show.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-tv-search',
  templateUrl: './tv-search.component.html',
  styleUrls: ['./tv-search.component.css']
})
export class TvSearchComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>();
  search = new FormControl('', [Validators.minLength(3)])

  constructor(private showService: ShowService) { }

  ngOnInit() {
    this.search.valueChanges
    .pipe(debounceTime(1000)).subscribe((searchValue : string) => {
      if (!this.search.invalid) {
        this.searchEvent.emit(searchValue)
      }
    })
  }
  getErrorMessage() {
    return this.search.hasError('minlength') ? 'Type three or more characters in the search box.' : '';
  }
}
