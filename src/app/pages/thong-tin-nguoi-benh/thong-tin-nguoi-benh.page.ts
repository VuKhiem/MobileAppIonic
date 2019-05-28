import { Component, OnInit } from '@angular/core';
import { formatPercent } from '@angular/common';

@Component({
  selector: 'app-thong-tin-nguoi-benh',
  templateUrl: './thong-tin-nguoi-benh.page.html',
  styleUrls: ['./thong-tin-nguoi-benh.page.scss'],
})
export class ThongTinNguoiBenhPage implements OnInit {

  title="Thông tin người bệnh";
  nameHospital="Bệnh viện nhân dân Gia Định"
  name="Trần An"; 
  Specialist="Chăm sóc da";
  DrName="Đặng Thùy Trâm";
  RoomTime="Phòng 20";
  date=new Date;
  MaSo="Đang cập nhật";
  NgaySinh=11/11/2011;
  GioiTinh="nam";
  Cmnd="123456789";
  NgheNghiep="Bac Sĩ";
  QuocGia="Viet Nam";
  DanToc="Kinh";
  SoDienThoai=83242374327;
  Email="123@fpt.com";
  Adress="Quận 7";

  constructor() { }

  ngOnInit() {
  }

}
