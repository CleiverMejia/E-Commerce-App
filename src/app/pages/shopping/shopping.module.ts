import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingPageRoutingModule } from './shopping-routing.module';

import { ShoppingPage } from './shopping.page';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingPageRoutingModule,
    HeaderModule
  ],
  declarations: [ShoppingPage]
})
export class ShoppingPageModule {}
