import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';
import { HoSoKhamPage } from './ho-so-kham.page';
import { ItemDanhSachComponentComponent } from 'src/app/components/item-danh-sach-component/item-danh-sach-component.component';
import { ItemDanhSachBenhNhanModule } from 'src/app/components/item-danh-sach-benh-nhan-component/item-danh-sach-benh-nhan.module';

const routes: Routes = [
  {
    path: '',
    component: HoSoKhamPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ItemDanhSachBenhNhanModule,
    HttpClientModule
  ],
  declarations: [HoSoKhamPage]
})
export class HoSoKhamPageModule {}
