import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { NewNewsDto } from './dto/new-newdto';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {

    constructor(private service: NewsService){}

    @Get()
    findAll() {
        return 'Hello World';
    }

    @Post()
    createNews(@Body() body: NewNewsDto){
        return this.service.createNews(body);
    }

  

}