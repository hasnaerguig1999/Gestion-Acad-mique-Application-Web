import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class RegisterUserDto {
    @IsString()
    @MinLength(4,{message:"userName must be at least 4 characters"})
    @IsNotEmpty()
    userName: string;

    @IsEmail()
    @MinLength(7,{message:"email must be at least 7 characters"})
    @IsNotEmpty()
    email: string;

    @IsString()
    @MinLength(10,{message:"phone number must be at least 13 characters"})
    @IsNotEmpty()
    phoneNumber: string;


    @IsString()
    @MinLength(4,{message:"password must be at least 4 characters"})
    @IsNotEmpty()
    password: string;


    @IsString()
    @MinLength(4,{message:"role must be at least 4 characters"})
    @IsNotEmpty()
    role: string;
    



}
