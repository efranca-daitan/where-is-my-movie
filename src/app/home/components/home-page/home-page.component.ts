import { Component, OnInit } from '@angular/core';
import { ChipComponent } from '../chip/chip.component';
import { SearchBarComponent } from '../seach-bar/search-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  providers: [ChipComponent, SearchBarComponent],
})
export class HomePageComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
