import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactAdminService {
  status: StatusModel[] = [
    { code: 'N', name: 'New' },
    { code: 'C', name: 'Close' },
  ];
  datas: ContactAdminModel[] = [];
  state: CONTACT_ADMIN_STATE = CONTACT_ADMIN_STATE.UNINITIALIZE;

  constructor(private http: HttpClient) {
    if (this.state == CONTACT_ADMIN_STATE.UNINITIALIZE) {
      this.loadAll();
    }
  }

  loadAll() {
    this.state = CONTACT_ADMIN_STATE.LOADING;
    const host = environment.apiHost;
    this.http.get<ContactAdminModel[]>(host + '/contact').subscribe(
      (datas) => {
        this.datas = datas;
        this.state = CONTACT_ADMIN_STATE.SUCCESS;
      },
      (err) => (this.state = CONTACT_ADMIN_STATE.FAIL)
    );
  }

  updateContact(id: number, contact: ContactAdminUpdateModel) {
    this.state = CONTACT_ADMIN_STATE.SAVING;
    const host = environment.apiHost;
    this.http
      .put<ContactAdminModel[]>(host + '/contact/' + id, contact)
      .subscribe(
        (_) => {
          this.state = CONTACT_ADMIN_STATE.SUCCESS;
          return this.loadAll();
        },
        (err) => (this.state = CONTACT_ADMIN_STATE.FAIL)
      );
  }
}

enum CONTACT_ADMIN_STATE {
  UNINITIALIZE,
  LOADING,
  SAVING,
  SUCCESS,
  FAIL,
}

interface ContactAdminModel {
  id: number;
  subject: number;
  message: string;
  status: string;
  createDate: Date;
  createByIp: string;
  comment: string;
  updateDate: Date;
  updateBy: number;
}

interface ContactAdminUpdateModel {
  status: string;
  comment: string;
}

interface StatusModel {
  code: string;
  name: string;
}
