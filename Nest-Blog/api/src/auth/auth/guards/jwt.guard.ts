import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

// With The Help Of The Guard We will Bascially Verify The User To perform The Valid Task 
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){
    
}