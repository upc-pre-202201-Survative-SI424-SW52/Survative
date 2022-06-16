import { Body, Injectable } from '@nestjs/common';
import { User} from './interfaces/User';
@Injectable()
export class UsersService {

    users: User[] = [
        {
            id: 1,
            name: "Alfredo",
            type: "Encuestado",
            age: 20,
            dni: 12345678,
        },

        {
            id: 2,
            name: "Kendall",
            type: "Encuestador",
            age: 39,
            dni: 63546413,
        },
    ];

    getUsers(): User[]{
        return this.users;
    }

    getUser(id: number): User{
        return this.users.find(user => user.id === id)
    }

    getType(type: string): User{
        return this.users.find(user => user.type === type)
    }

}
