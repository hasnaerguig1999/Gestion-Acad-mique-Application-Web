import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from '../users/dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  
  
  async signIn(signInDto: SignInDto) {
    const { email,password } = signInDto;

    const user = await this.usersService.findByUseremail(email);
  
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    
    const passwordIsValid = await user.validatePassword(password);
    
    if (!passwordIsValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { sub: user.id, email: user.email };
    const accessToken = await this.jwtService.signAsync(payload);
 

    return { access_token: accessToken };
  }


  
}