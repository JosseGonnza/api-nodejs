import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    Relation
} from "typeorm";
import {UserComicEntity} from "../../../userComic/domain/entities/userComic.entity";
import {Tomo} from "../valueObjects/tomo";

@Entity({ name: "comic" })
export class ComicEntity {
    @PrimaryColumn("uuid")
    id!: string;
    @Column()
    title!: string;
    @Column()
    author!: string;
    // @ManyToOne(() => Tomo, (tomo) => tomo.comic, {
    //     cascade: true,
    //     nullable: true
    // })
    // tomos?: Array<Tomo>;
    @ManyToOne(() => UserComicEntity, (userComic) => userComic.comic, {
        cascade: true,
    })
    userComics!: Relation<UserComicEntity>[];
}