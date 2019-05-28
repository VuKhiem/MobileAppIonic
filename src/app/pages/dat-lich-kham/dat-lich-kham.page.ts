import { DateServiceService } from './../../date-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dat-lich-kham',
  templateUrl: './dat-lich-kham.page.html',
  styleUrls: ['./dat-lich-kham.page.scss'],
})
export class DatLichKhamPage implements OnInit {
  
  title="Đặt lịch khám";
  // @Input() Date: string;
  DateServiceService: any;
  constructor(private router: Router,private dateServ: DateServiceService) {  
   }
  //----TestData---------------------------
  nameHospital="Bệnh viện nhân dân Gia Định"
  name="Trần An"; 
  Specialist="Chăm sóc da";
  DrName="Đặng Thùy Trâm";
  RoomTime="Phòng 20";
  date=new Date;


  nextPageChonNgay() {
    this.router.navigate(['chon-ngay-kham']);
  }
  
  ngOnInit() { 
    // this.dateServ.date(data => (this.sentData = data));
    // console.log("sent data from login page : ", this.sentData);
  }

}
