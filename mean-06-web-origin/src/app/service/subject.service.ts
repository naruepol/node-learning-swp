import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  state: SUBJECT_STATE = SUBJECT_STATE.UNINITIALIZE;
  datas: SubjectModel[] = [];

  constructor(private http: HttpClient) {
    if (this.state == SUBJECT_STATE.UNINITIALIZE) {
      this.loadAll();
    }
  }

  loadAll() {
    this.state = SUBJECT_STATE.LOADING;
    const host = environment.apiHost;
    this.http.get<SubjectModel[]>(host + '/subject').subscribe(
      (datas) => {
        this.datas = datas;
        this.state = SUBJECT_STATE.SUCCESS;
      },
      (err) => (this.state = SUBJECT_STATE.FAIL)
    );
  }

  createSubject(subject: SubjectModel) {}

  updateSubject(id: number, subject: SubjectModel) {}

  deleteSubject(id: number) {}
}

enum SUBJECT_STATE {
  UNINITIALIZE,
  LOADING,
  SAVING,
  SUCCESS,
  FAIL,
}

interface SubjectModel {
  id?: number;
  code: string;
  name: string;
}
