import { Controller, Get, Post, Req, HttpCode, Param } from '@nestjs/common';
import { AppService } from '../app.service';
import { IAccountInfo } from 'src/models/IAccountInfo';

@Controller("account")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get():IAccountInfo[] {
    return this.appService.getHello();
  }

  
  @Get(':name')
  getbyName(@Param() params):IAccountInfo[] {
    return params.name;
  }

}
