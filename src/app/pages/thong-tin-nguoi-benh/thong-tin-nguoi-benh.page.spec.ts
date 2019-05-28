import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinNguoiBenhPage } from './thong-tin-nguoi-benh.page';

describe('ThongTinNguoiBenhPage', () => {
  let component: ThongTinNguoiBenhPage;
  let fixture: ComponentFixture<ThongTinNguoiBenhPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinNguoiBenhPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinNguoiBenhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
