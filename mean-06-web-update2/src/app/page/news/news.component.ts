import { Component, OnInit } from '@angular/core';
import { NewsResp, NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  
title = 'Hot News';

info = {
    title_head : 'Head News',
    url: 'http:///www.google.com'
};

  //allNews = []

  allNews: NewsResp[]= [];

  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe((resp) => (this.allNews = resp));
  }

}
