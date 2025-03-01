import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardModule } from 'src/app/components/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    SharedModule,
    CardModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
