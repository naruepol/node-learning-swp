import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  findAll(){
    const url = environment.apiHost+'/news';
    return this.http.get<NewsResp[]>(url);
  }
}

export interface NewsResp{
  title: string;
  subtitle: string;
  content: string;
}