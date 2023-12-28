import { IsNotEmpty, IsString, Min, MinLength, isString } from "class-validator";


export class CreateFacultyDto {
    @IsString()
    @MinLength(4,{message:"name must be at least 4 characters"})
    @IsNotEmpty()
    name: string;

    @IsString()
    @MinLength(4,{message:"address must be at least 4 characters"})
    @IsNotEmpty()
    address: string;

    
}
