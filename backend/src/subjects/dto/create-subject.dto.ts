import { IsInt, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateSubjectDto {
    @IsString()
    @MinLength(4,{message:"name must be at least 4 characters"})
    @IsNotEmpty()
    name: string;
    @IsNumber()
    @IsNotEmpty()
    @IsInt({ message: "branchId must be an integer" })
    branchId:number
}
