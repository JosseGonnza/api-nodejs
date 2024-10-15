import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation} from "typeorm";
import {UserComicEntity} from "../../../userComic/domain/entities/userComic.entity";

@Entity({ name: "users" })
export class UserEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: number;

    @Column({
        unique: true
    })
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

    @ManyToOne(() => UserComicEntity, (userComic) => userComic.user, {
        cascade: true,
    })
    userComics!: Relation<UserComicEntity>[];
}