 import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
    ) {}

  async validateUser(email: string, pass: string){
    const user = await this.userService.findByEmail(email);
    const checkPass = user ? await bcrypt.compare(pass, user.password) : false;
    if (user && checkPass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: any) {
    const payload = { email: user._doc.email, id: user._doc._id };
    return {
      ok: true,
      access_token: this.jwtService.sign(payload),
      email: payload.email,
      uid: payload.id
    };
}
}
