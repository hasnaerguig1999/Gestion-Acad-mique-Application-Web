import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  @MinLength(4, { message: 'name must be at least be 4 caracter' })
  @IsNotEmpty()
  name: string;
  
  @IsNumber()
  @IsNotEmpty()
  capacity: number;

  @IsNotEmpty()
  @IsNumber()
  subjectId: number;
}
