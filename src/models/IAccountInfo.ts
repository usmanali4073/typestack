import { ApiProperty } from "@nestjs/swagger";

export interface IAccountInfo{

    Name:string;
    Age:number;
    StreetAddress:string;
    Town:string;
}