import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { NewNewsDto } from './dto/new-newdto';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {

    constructor(private service: NewsService){}

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Post()
    createNews(@Body() body: NewNewsDto){
        return this.service.createNews(body);
    }

    @Put('by-id/:id')
    updateNews(@Body() body: NewNewsDto, @Param('id') id: string){
        return this.service.updateNews(id, body);
    }

    @Delete('by-id/:id')
    deleteById(@Param('id') id: string){
        return this.service.deleteById(id);
    }   

    @Get('page')
    byPage(@Query('skip') skip:number, @Query('limit') limit:number){
        return this.service.findByPage(skip,limit);
    }

    @Get('filter')
    filter(@Query('title') title:string){
        return this.service.findByTitle(title);
    }
}