import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../models/user.interface';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
// This is bascially the roles guard only the admin can perform the task which we has authenticated 
import { hasRoles } from 'src/auth/auth/decorator/role.decorator';
import { JwtAuthGuard } from 'src/auth/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/auth/guards/roles.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Add All Post
  @Post()
  create(@Body() user: User): Observable<User | Object> {
    return this.userService.create(user).pipe(
      map((user: User) => user),
      catchError((err) => of({ error: err.message })),
    );
  }

  // Login Method
  // When The User Is Successfull Login Then Send Back The user
  // And Also Send The jwt Token With It
  @Post('login')
  login(@Body() user: User): Observable<Object> {
      return this.userService.login(user).pipe(
          map((jwt: string) => {
              return { access_token: jwt };
          })
      )
  }

  // Get Post By ID
  @Get(':id')
  findOne(@Param() params): Observable<User> {
    return this.userService.findOne(params.id);
  }

  // Get All Post
  @hasRoles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  findAll(): Observable<User[]> {
    return this.userService.findAll();
  }

  // Update By Id
  @Put(':id')
  updateOne(@Param('id') id: string, @Body() user: User): Observable<any> {
    return this.userService.updateOne(Number(id), user);
  }

  // Delete Post
  @Delete(':id')
  deleteOne(@Param('id') id: string): Observable<any> {
    return this.userService.deleteOne(Number(id));
  }
}
