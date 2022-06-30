import { Controller, Get, Post, Put, Delete, Body, Param, Req, Res, ParseArrayPipe} from '@nestjs/common';

import { CreateUserDto } from "./dto/create-user.dto"
import { UsersService} from "./users.service"
import { User} from "./interfaces/User"
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @Get()
    getUsers(): User[] {
        return this.userService.getUsers();
    }

    @Get(':userId')
    getUser(@Param('userId') userId: string){
        return this.userService.getUser(parseInt(userId));
    }

    @Post()
    createUsers(@Body() user:CreateUserDto){
        console.log(user.name,user.type, user.age, user.dni)
        return 'Creando usuario';
    }

    @Put(':userId')
    updateUsers(@Body() user:CreateUserDto, @Param('userId') userId){
        console.log(user)
        console.log(userId)
        return 'Usuario ingresado';
    }

    @Delete(':userId')
    eliminateUser(@Param('userId') userId){
        console.log(userId);
        return `eliminando el usuario número: ${userId}`;
    }
}
