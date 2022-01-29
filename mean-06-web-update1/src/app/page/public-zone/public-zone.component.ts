import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MediaObserver } from '@angular/flex-layout';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { WorkzoneService } from 'src/app/service/workzone.service';

@Component({
  selector: 'app-public-zone',
  templateUrl: './public-zone.component.html',
  styleUrls: ['./public-zone.component.scss'],
})
export class PublicZoneComponent implements OnInit {
  mode: MatDrawerMode = 'side';
  notifier = new Subject();

  publicList = [
    { name: 'หน้าหลัก', url: 'home', icon: 'home' },
    { name: 'สินค้า', url: 'product', icon: 'inventory_2' },
    { name: 'บริการ', url: 'service', icon: 'support_agent' },
    { name: 'ติดต่อสอบถาม', url: 'contact-us', icon: 'contact_mail' },
    { name: 'เกี่ยวกับเรา', url: 'about-us', icon: 'info' },
    { name: 'คำถามที่พบบ่อย', url: 'faq', icon: 'quiz' },
    { name: 'แนะนำบริการ', url: 'complaint', icon: 'assistant' },
    { name: 'ข่าวสาร', url: 'news', icon:'newspaper'},
    {
      name: 'ลงทะเบียนสมาชิกใหม่',
      url: 'register',
      icon: 'app_registration',
    },
    {
      name: 'เข้าสู่ระบบ',
      url: 'login',
      icon: 'login',
    },
  ];

  featureList = [
    {
      name: 'ระบบนัด',
      expanded: true,
      icon: 'wysiwyg',
      feature: [
        { name: 'ภาพรวมผลประกอบการ', url: 'dashboard' },
        { name: 'นัดหมอ', url: 'service-req' },
      ],
    },
    {
      name: 'สำหรับเจ้าหน้าที่',
      expanded: false,
      icon: 'summarize',
      feature: [
        {
          name: 'จัดการนัด',
          url: 'service-approve',
        },
        {
          name: 'รับชำระค่าบริการ',
          url: 'payment',
        },
        {
          name: 'ติดต่อสอบถาม',
          url: 'contact-admin',
        },
      ],
    },
    {
      name: 'ตั้งค่าระบบ',
      expanded: false,
      icon: 'settings',
      feature: [
        {
          name: 'ผู้ใช้งาน',
          url: 'user',
        },
        {
          name: 'บริการ',
          url: 'service',
        },
        {
          name: 'หมอ',
          url: 'doctor',
        },
        {
          name: 'หัวข้อ',
          url: 'subject',
        },
      ],
    },
  ];

  constructor(
    private router: Router,
    public authService: AuthService,
    mediaObserver: MediaObserver,
    public workZone: WorkzoneService
  ) {
    mediaObserver
      .asObservable()
      .pipe(takeUntil(this.notifier))
      .subscribe((change) => {
        const val = change.filter(
          (ch) => ch.mqAlias === 'xs' || ch.mqAlias === 'sm'
        );
        this.mode = val.length > 0 ? 'over' : 'side';
        this.workZone.isDrawerOpen = val.length > 0 ? false : true;
      });
  }

  ngOnInit(): void {}

  goUrl(path: string) {
    this.router.navigate(['', path]);
  }
}
