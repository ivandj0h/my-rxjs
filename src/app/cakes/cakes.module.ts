import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CakesRoutingModule } from './cakes-routing.module';
import { HomeComponent } from './home/home.component';
import {EntityDefinitionService} from "@ngrx/data";
import {CakeEntityMetadata} from "./store/cake-entity-metadata";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CakesRoutingModule
  ]
})
export class CakesModule {
  constructor(entityDefinitionService: EntityDefinitionService) {
    entityDefinitionService.registerMetadataMap(CakeEntityMetadata);
  }
}
