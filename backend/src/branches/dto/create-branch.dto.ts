import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateBranchDto {
    @IsString()
    @MinLength(4,{message:"name must be at least 4 characters"})
    @IsNotEmpty()
    name: string;

    @IsString()
    @MinLength(4,{message:"description must be at least 4 characters"})
    @IsNotEmpty()
    description: string;
}
