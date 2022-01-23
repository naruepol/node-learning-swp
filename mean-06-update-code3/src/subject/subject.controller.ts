import { Body, Controller, Delete, Get, Logger, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { NewSubject } from './dto/new-subject';
import { SubjectService } from './subject.service';

@UseGuards(AuthGuard('jwt'))
@Controller('subject')
export class SubjectController {
    logger : Logger = new Logger(SubjectController.name);

    constructor(private service: SubjectService){

    }

    //resolve get method
    @Get()
    index(): any{
        return this.service.all();
        // return {
        //     result : true,
        //     messsage: 'Hello World',
        // };
    }

    //resolve post method
    @Post()
    save(@Body() body: NewSubject): any{
        this.logger.log("body");
        this.logger.log(body.code);
        return  this.service.newSubject(body);
        // return {
        //     result : true,
        //     messsage: 'Save Success',
        // };
    }

    @Get('by-id/:id')
    findById(@Param('id')id: number){
        this.logger.log(id);
        return this.service.byId(id);
    }

    //Update
    @Put('by-id/:id')
    updateById(@Param('id') id: number, @Body() body: NewSubject){
        return this.service.updateById(id, body);
    }

    @Delete('by-id/:id')
    deleteById(@Param('id') id: number){
        return this.service.deleteById(id);
    }    

    @Get('filter')
    filterByCode(@Query('code') code: string){
        return this.service.filterByCode(code);
    }

    @Get('page')
    listByPage(@Query('skip') skip: number, @Query('limit') limit: number){
        return this.service.filterPage(skip,limit);
    }
}
