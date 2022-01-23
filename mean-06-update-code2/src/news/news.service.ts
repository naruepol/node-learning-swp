import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { News, NewsDocument } from 'src/schemas/news';
import { NewNewsDto } from './dto/new-newdto';

@Injectable()
export class NewsService {

    constructor(
        @InjectModel(News.name) private readonly newsModel: Model<NewsDocument>
    ) { }


    async createNews(news: NewNewsDto){
        const resp = await this.newsModel.create(news);
        return resp;
    }

    // createNews(news: NewNewsDto){
    //     // return this.newsModel
    //     // .create(news)
    //     // .then(this.createSuccess)
    //     // .catch(this.createError);
    //     //return this.newsModel.create(news);
    //     return this.newsModel
    //         .create(news)
    //         .then((resp) => {})
    //         .catch((err)=> {});
    // }

    // createSuccess(resp){
    //     //this.logger.log(resp);
    // }
    // createError(err){
    //     //this.logger.log(err);
    // }
}
