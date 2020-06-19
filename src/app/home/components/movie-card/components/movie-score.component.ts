import {
  Component,
  OnChanges,
  OnInit,
  Input,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-movie-card-score',
  templateUrl: './movie-score.component.html',
  styleUrls: ['./movie-score.component.scss'],
})
export class MovieScoreComponent implements OnChanges, OnInit {
  @Input() porcent: number;
  colorScore: Object;

  private colors;
  private lowerPorcent = 30;
  private mediumPorcent = 70;

  constructor() {
    this.colors = {
      high: { clear: '#3ED079', dark: '#1F452A' },
      medium: { clear: '#D2D530', dark: '#3C3912' },
      low: { clear: '#DB2360', dark: '#571435' },
    };
  }
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'porcent': {
            if (this.porcent > this.mediumPorcent) {
              this.colorScore = this.colors['high'];
            } else if (this.porcent > this.lowerPorcent) {
              this.colorScore = this.colors['medium'];
            } else {
              this.colorScore = this.colors['low'];
            }
          }
        }
      }
    }
  }
  ngOnInit() {
    if (this.porcent > this.mediumPorcent) {
      this.colorScore = this.colors['high'];
    } else if (this.porcent > this.lowerPorcent) {
      this.colorScore = this.colors['medium'];
    } else {
      this.colorScore = this.colors['low'];
    }
  }

  calStrokeFill() {
    return 250 - (250 * this.porcent) / 100;
  }
}
