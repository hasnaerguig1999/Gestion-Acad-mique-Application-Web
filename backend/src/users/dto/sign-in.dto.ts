import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsNotEmpty, IsString,MinLength } from "class-validator";
import { RegisterUserDto } from "./register-user.dto";

export class SignInDto  extends PartialType(RegisterUserDto) {

}
