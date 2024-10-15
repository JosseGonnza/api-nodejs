import {Column, Entity, ManyToOne, PrimaryColumn, Relation} from "typeorm";
import {UserComicEntity} from "../../../userComic/domain/entities/userComic.entity";
import {Tomo} from "../valueObjects/tomo";

@Entity({ name: "comics" })
export class ComicEntity {
    @PrimaryColumn("uuid")
    id!: string;

    @Column()
    title!: string;

    @Column()
    author!: string;

    @Column("simple-array")
    tomos?: Tomo[];

    @ManyToOne(() => UserComicEntity, (userComic) => userComic.comic, {
        cascade: true,
    })
    userComics!: Relation<UserComicEntity>[];
}