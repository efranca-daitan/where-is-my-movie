import {
    OnInit,
  } from '@angular/core';

@Component({
    selector: 'pf-catalog-page',
    templateUrl: './catalog-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [catalogPageAnimation, catalogPageFadeInAnimation],
  })