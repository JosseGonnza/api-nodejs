import {UserEntity} from "../entities/user.entity";

export interface IUserCommandRepository {
    saveUser(user: UserEntity): Promise<UserEntity>;
    updateUser(id: string, user: Partial<UserEntity>): Promise<UserEntity>;
    deleteUser(id: string): Promise<boolean>;
}