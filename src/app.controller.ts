import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthUserDto } from './auth/dto/AuthUser.dto';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { LocalStrategy } from './auth/local.strategy';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private localStrategy: LocalStrategy,
  ) {}

  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login')
  // async login(@Request() req) {
  //   return await this.authService.login(req.user);
  // }
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() authUserDto: AuthUserDto) {
    const { email, password } = authUserDto;
    const user = await this.localStrategy.validate(email, password)
    // console.log(user);
    return await this.authService.login(user);
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
