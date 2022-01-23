import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types as MongooseTypes } from 'mongoose';
import { catchError } from 'rxjs/operators';
import { News, NewsDocument } from 'src/schemas/news';
import { NewNewsDto } from './dto/new-newdto';

@Injectable()
export class NewsService {
    logger: Logger = new Logger(NewsService.name);

    constructor(
        @InjectModel(News.name) private readonly newsModel: Model<NewsDocument>
    ) { }


    async createNews(news: NewNewsDto){
        const resp = await this.newsModel.create(news);
        return resp;
    }

    async updateNews(id: string, news: NewNewsDto){
        try{
            const _id = MongooseTypes.ObjectId(id);
            const resp = await this.newsModel.findOneAndUpdate({ _id }, news);
            return resp;
        }catch(e){
            this.logger.log(e);
        }
    }
    
    async deleteById(id:string){
        try{
            const _id = MongooseTypes.ObjectId(id);
            return this.newsModel.findOneAndDelete({_id});
        }catch(e){
            this.logger.log(e);
        }

    }

    async findAll(){
        try{
            const resp = await this.newsModel.find().exec();
            return resp;
        }catch(e){
            this.logger.log(e);
        }
    }

    async findByPage(skip: number, limit: number){
        try{
            const resp = await this.newsModel.find().skip(skip).limit(limit).exec();
            return resp;
        }catch(e){
            this.logger.log(e);
        }
    }


    async findByTitle(title: string){
        try{
            const resp = await this.newsModel.find({ title }).exec();
            return resp;
        }catch(e){
            this.logger.log(e);
        }
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
