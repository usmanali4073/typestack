import { IAccountInfo } from './models/IAccountInfo';
import { Injectable, Scope } from '@nestjs/common';
import { AccountModel } from './models/accountModel';

@Injectable({scope: Scope.REQUEST})
export class AppService {



  private accountInfo:Array<IAccountInfo> = new Array<IAccountInfo>();

  async getHello(): Promise<IAccountInfo[]> {

    const account:IAccountInfo =  {Name:"Takmeela Ali", Age:22, StreetAddress:"142 Terrace Drive", Town:"Vernon"}
    console.log(account)
   
       this.accountInfo.push(account)
       
    return this.accountInfo;
  }


  create(createAccountInfoDto: AccountModel) {
    console.log(createAccountInfoDto)
  }
}
