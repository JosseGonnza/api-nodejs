import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn, ManyToOne,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    Relation
} from "typeorm";
import {UserComicEntity} from "../../../userComic/domain/entities/userComic.entity";

@Entity({ name: "user" })
export class UserEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: number;
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
    @ManyToOne(() => UserComicEntity, (userComic) => userComic.user, {
        cascade: true,
    })
    userComics!: Relation<UserComicEntity>[];
}