import { ApiProperty } from "@nestjs/swagger";

export class AccountModel {
    @ApiProperty({description:"Name is req", type: String, required:true})
    Name:string;
    @ApiProperty()
    Age:number;
    @ApiProperty()
    StreetAddress:string;
    @ApiProperty()
    Town:string;
   
}