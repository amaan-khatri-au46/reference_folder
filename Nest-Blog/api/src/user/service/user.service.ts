import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user.entity';
import { User } from '../models/user.interface';
import { Observable, from, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/auth/auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    // for making user authentcation we need this authservice
    private authService: AuthService,
  ) {}

  create(user: User): Observable<User> {
    return this.authService.hashPassword(user.password).pipe(
      switchMap((passwordHash: string) => {
        const newUser = new UserEntity();
        newUser.name = user.name;
        newUser.username = user.username;
        newUser.email = user.email;
        newUser.password = passwordHash;
        newUser.role = user.role;

        return from(this.userRepository.save(newUser)).pipe(
          map((user: User) => {
            // Inside password there would be password and inside result there would be the information related to the user
            const { password, ...result } = user;
            return result;
          }),
          catchError((err) => throwError(err)),
        );
      }),
    );
  }

  // Find By Id
  findOne(id: number): Observable<User> {
    return from(this.userRepository.findOneBy({ id })).pipe(
      // Here We Will Remove The Password When It Will Search For Find By Id
      map((user: User) => {
        console.log(user)
        const { password, ...result } = user;
        return result;
      }),
    );
  }

  //   Find  All
  findAll(): Observable<User[]> {
    return from(this.userRepository.find()).pipe(
      map((users: User[]) => {
        users.forEach((p) => {
          delete p.password;
        });
        return users;
      }),
    );
  }

  // UpdateById
  updateOne(id: number, user: User): Observable<any> {
    // When The User Will Be Update It Would Show The Username And Password
    delete user.email;
    delete user.password;
    return from(this.userRepository.update(id, user));
  }

  // Delete By Id
  deleteOne(id: number): Observable<any> {
    return from(this.userRepository.delete(id));
  }

  // One The User Has Been Created Then We Need TO Login Only The Register User Will Be Able TO Login
  // With The Validate User And One We Will Be Login We Will Generate The Jwt Token
  login(user: User): Observable<string> {
    return this.validateUser(user.email, user.password).pipe(
      switchMap((user: User) => {
        if (user) {
          return this.authService
            .generateJWT(user)
            .pipe(map((jwt: string) => jwt));
        } else {
          throw new UnauthorizedException();
        }
      }),
    );
  }

  // Validating The User With The Password And HashPassword ....
  // While Calling The ComparePassword Method
  validateUser(email: string, password: string): Observable<User> {
    return from(this.userRepository.findOneBy({email})).pipe(
      switchMap((user: User) =>
        this.authService.comparePasswords(password, user.password).pipe(
          map((match: boolean) => {
            if (match) {
              const { password, ...result } = user;
              return result;
            } else {
              throw new UnauthorizedException();
            }
          }),
        ),
      ),
    );
  }

  findByMail(email: string): Observable<User> {
    return from(this.userRepository.findOneBy({ email }));
  }
}
