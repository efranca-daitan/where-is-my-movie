
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { InlineSVGModule } from 'ng-inline-svg';
import { CatalogRoutingModule } from './catalog-routing.module';
import {
  CatalogPageComponent,
  CatalogPathCardComponent,
} from './components';

@NgModule({
  declarations: [
    CatalogPageComponent,
    CatalogPathCardComponent,
  ],
  imports: [
    CatalogRoutingModule,
    CommonModule,
    InlineSVGModule.forRoot(),
    ReactiveFormsModule,
    SharedModule,
    InlineSVGModule.forRoot(),
  ],
  exports: [
    CatalogPathCardComponent,
  ],
})
export class CatalogModule {}