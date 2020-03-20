import { IAccountInfo } from './models/IAccountInfo';
import { Injectable, Scope } from '@nestjs/common';

@Injectable({scope: Scope.REQUEST})
export class AppService {

  private accountInfo:Array<IAccountInfo> = new Array<IAccountInfo>();

  getHello(): IAccountInfo[] {

    const account:IAccountInfo =  {Name:"Usman", Age:22, StreetAddress:"142 Terrace Drive", Town:"Vernon"}
    console.log(account)
    this.accountInfo.push(account)
    return this.accountInfo;
  }
  


}
