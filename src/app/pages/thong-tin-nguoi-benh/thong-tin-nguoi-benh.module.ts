import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThongTinNguoiBenhPage } from './thong-tin-nguoi-benh.page';

const routes: Routes = [
  {
    path: '',
    component: ThongTinNguoiBenhPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ThongTinNguoiBenhPage]
})
export class ThongTinNguoiBenhPageModule {}
