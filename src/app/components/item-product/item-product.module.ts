import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemProductComponent } from './item-product.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ItemProductComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ItemProductComponent]
})
export class ItemProductModule { }
