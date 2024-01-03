import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  @MinLength(4, { message: 'name must be at least be 4 caracter' })
  @IsNotEmpty()
  name: string;
  
  @IsString()
  @IsNotEmpty()
  capacity: number;
}
