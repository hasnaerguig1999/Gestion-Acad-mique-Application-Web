import { IsEmail, IsNotEmpty, IsString, Min, MinLength } from "class-validator";

export class CreateTeacherDto {  
    @IsString()
    @MinLength(4,{message:'firstName must be at least be 4 caracter'})
    @IsNotEmpty()
    firstName: string;
  
    @IsString()
    @IsNotEmpty()
    @MinLength(4,{message:'firstName must be at least be 4 caracter'})
    lastName: string;
  
    @IsNotEmpty()
    @MinLength(4,{message:'email must be at least be 4 caracter'})
    @IsEmail()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    @MinLength(4,{message:'numberphone must be at least be 4 caracter'})
    phoneNumber: string;
    
    @IsString()
    @IsNotEmpty()
    role: string;
}
