import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetspagePageRoutingModule } from './petspage-routing.module';

import { PetspagePage } from './petspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetspagePageRoutingModule
  ],
  declarations: [PetspagePage]
})
export class PetspagePageModule {}
