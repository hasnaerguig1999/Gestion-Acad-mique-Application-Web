
import { IsInt, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";



export class CreateSubjectDto {
    
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsNumber()
    @IsNotEmpty()
    @IsInt({ message: "branchId must be an integer" })
    branchId:number
}

