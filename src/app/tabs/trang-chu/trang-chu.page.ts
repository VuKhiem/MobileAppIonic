import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as routerConst from '../../router.const';

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.page.html',
  styleUrls: ['./trang-chu.page.scss'],
})
export class TrangChuPage implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    nextPage() {
        this.router.navigate([`${routerConst.RouterUrl.DANG_KY_KHAM}`]);
    }
	demoNgxStore() {
        this.router.navigate([`${routerConst.RouterUrl.LIST_TODO}`]);
    }
    nextPage2() {
      this.router.navigate(['ho-so-kham']);
      
    }
    nextPage3() {
      this.router.navigate(['dat-lich-kham']);
    }
    nextPage4() {
      this.router.navigate(['tim-kiem-benh-nhan']);
    }
    nextPage5() {
      this.router.navigate(['ho-so-benh-nhan']);
    }
}
