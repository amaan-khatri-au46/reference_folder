import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {

    
// Get All Users 
    @Get()
    getUser(){}

// Add Users
    @Post()
    createUser(){}

}
