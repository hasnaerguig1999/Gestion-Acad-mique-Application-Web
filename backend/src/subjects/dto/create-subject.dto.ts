import { IsNotEmpty, IsString } from "class-validator";

export class CreateSubjectDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}
