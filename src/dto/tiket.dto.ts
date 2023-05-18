import {
    IsEmail,
    IsNotEmpty,
    MinLength,
    IsString,
    IsOptional,
    IsIn,
    IsArray,
    ArrayUnique,
    Validate,
  } from 'class-validator';

  export class TiketDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    priority: string;

    @IsNotEmpty()
    @IsString()
    date_to_end: string;

    @IsNotEmpty()
    @IsString()
    status: string;
  }