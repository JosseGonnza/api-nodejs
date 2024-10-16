import {UserRepository} from "../../infrastructure/repositories/UserRepository";
import {UserEntity} from "../../domain/entities/user.entity";
import {UserComicEntity} from "../../../userComic/domain/entities/userComic.entity";
import {v4 as uuidv4} from "uuid";

export class Create {
    private userRepository: UserRepository;


    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute(request: CreateUserRequest): Promise<UserEntity>{
        const newUser: UserEntity = {
            id: uuidv4(),
            nickName: request.nickName,
            name: request.name,
            lastname: request.lastname,
            address: request.address,
            email: request.email,
            password: request.password,
            phone: request.phone,
            userComics: request.userComics
        };
        return await this.userRepository.saveUser(newUser);
    }
}

export interface CreateUserRequest {
    id: string,
    nickName: string,
    name: string,
    lastname: string,
    address: string,
    email: string,
    password: string,
    phone: number,
    userComics: UserComicEntity[]
}
