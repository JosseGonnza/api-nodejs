import { UserEntity } from "../../domain/entities/user.entity";
import {IUserCommandRepository} from "../../domain/ports/IUserCommandRepository";
import {DataSource} from "typeorm";

export class UserRepository implements IUserCommandRepository {
    private dataSource: DataSource;

    constructor(dataSource: DataSource) {
        this.dataSource = dataSource;
    }

    async saveUser(user: UserEntity): Promise<UserEntity> {
        const userRepository = this.dataSource.getRepository(UserEntity);
        const existingUser = await userRepository.findOne({
            where: {
                id: user.id,
            },
        });
        if (existingUser) {
            throw new Error(`This ID: ${user.id} already exist.`);
        } else {
            return userRepository.save(user);
        }
    }
    async updateUser(id: string, user: Partial<UserEntity>): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    async deleteUser(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}