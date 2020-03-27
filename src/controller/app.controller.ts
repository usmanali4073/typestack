import { Controller, Get, Param, Req, Post, Body, HttpCode } from '@nestjs/common';
import { AppService } from '../app.service';
import { IAccountInfo } from 'src/models/IAccountInfo';
import { Request } from 'express';
import { AccountModel } from '../models/AccountModel';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@Controller("account")
@ApiTags("Account")
export class AppController{
  constructor(private readonly appService: AppService) {}

  @Get()
 async  get():Promise<IAccountInfo[]> {
    return await this.appService.getHello();
  }

  
  @Get(':name')
  getbyName(@Param() params, @Req() request: Request):IAccountInfo[] {
    console.log(request.url)
    return params.name;
  }

  @Post()
  @HttpCode(201)
  create(@Body() createAccountInfoDto: AccountModel):AccountModel {
  this.appService.create(createAccountInfoDto);
  return  createAccountInfoDto
}

}
