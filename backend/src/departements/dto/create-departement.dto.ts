
import { IsNotEmpty, IsString, MinLength} from "class-validator";

export class CreateDepartementDto {
    @IsString()
    @MinLength(4,{message:"name must be at least 4 characters"})
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    supervisor : string;

    @IsString()
    @IsNotEmpty()
    faculte : string;

    @IsString()
    @IsNotEmpty()
    teachers : string;
}
