import {BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Relation} from "typeorm";
import {UserEntity} from "../../../user/domain/entities/user.entity";
import {ComicEntity} from "../../../comic/domain/entities/comic.entity";

@Entity({ name: "userComic" })
export class UserComicEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
    @Column()
    userId!: string;
    @Column()
    comicId!: string;

    @OneToOne(() => UserEntity, (user) => user.userComics)
    @JoinColumn()
    user!: Relation<UserEntity>;
    @OneToOne(() => ComicEntity, (comic) => comic.userComics)
    @JoinColumn()
    comic!: Relation<ComicEntity[]>;
}