import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingPageRoutingModule } from './shopping-routing.module';

import { ShoppingPage } from './shopping.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { ItemProductModule } from 'src/app/components/item-product/item-product.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingPageRoutingModule,
    HeaderModule,
    ItemProductModule,
  ],
  declarations: [ShoppingPage]
})
export class ShoppingPageModule {}
