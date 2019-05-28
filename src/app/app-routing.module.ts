import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import * as routerConst from './router.const';
const routes: Routes = [
    { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: `${routerConst.RouterUrl.DANG_KY_KHAM}`, loadChildren: './pages/dang-ky-kham/dang-ky-kham.module#DangKyKhamPageModule' },
    { path: `${routerConst.RouterUrl.TODO_DETAIL}`, loadChildren: './pages/todo/todo.module#TodoPageModule' },
    { path: `${routerConst.RouterUrl.LIST_TODO}`, loadChildren: './pages/todo-list/todo-list.module#TodoListPageModule' },
  { path: 'ho-so-kham', loadChildren: './pages/ho-so-kham/ho-so-kham.module#HoSoKhamPageModule' },
  { path: 'dat-lich-kham', loadChildren: './pages/dat-lich-kham/dat-lich-kham.module#DatLichKhamPageModule' },
  { path: 'tim-kiem-benh-nhan', loadChildren: './pages/tim-kiem-benh-nhan/tim-kiem-benh-nhan.module#TimKiemBenhNhanPageModule' },
  { path: 'ho-so-benh-nhan', loadChildren: './pages/ho-so-benh-nhan/ho-so-benh-nhan.module#HoSoBenhNhanPageModule' },
  { path: 'chon-ngay-kham', loadChildren: './pages/chon-ngay-kham/chon-ngay-kham.module#ChonNgayKhamPageModule' },
  { path: 'thong-tin-nguoi-benh', loadChildren: './pages/thong-tin-nguoi-benh/thong-tin-nguoi-benh.module#ThongTinNguoiBenhPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
