import {BaseEntity, Column, Entity} from "typeorm";
import {UserComicEntity} from "../../../userComic/domain/entities/userComic.entity";
import {Tomo} from "../valueObjects/tomo";

@Entity({ name: "comic" })
export class ComicEntity extends BaseEntity {
    @Column()
    title!: string;
    @Column()
    author!: string;
    @Column()
    tomos!: Tomo[];
    @Column()
    userComics!: UserComicEntity[];
}