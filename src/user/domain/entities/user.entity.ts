import {BaseEntity, Column, Entity} from "typeorm";
import {UserComicEntity} from "../../../userComic/domain/entities/userComic.entity";

@Entity({ name: "user" })
export class UserEntity extends BaseEntity {
    @Column()
    nickName!: string;
    @Column()
    name!: string;
    @Column()
    lastname!: string
    @Column({ nullable: true })
    address?: string;
    @Column()
    email!: string;
    @Column()
    password!: string;
    @Column()
    phone!: number;
    @Column()
    userComics!: UserComicEntity[];
}