// import {Chapter} from "./chapter";
// import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn} from "typeorm";
// import {UserComicEntity} from "../../../userComic/domain/entities/userComic.entity";
// import {UserEntity} from "../../../user/domain/entities/user.entity";
// import {ComicEntity} from "../entities/comic.entity";
//
// @Entity({ name: "tomo" })
// export class Tomo {
//     @PrimaryColumn("uuid")
//     id!: string;
//     @Column()
//     number!: string;
//     @ManyToOne(() => Chapter, (chapter) => chapter.id, {
//         cascade: true,
//         nullable: true
//     })
//     chapters!: Chapter[];
//     @OneToOne(() => ComicEntity, (comic) => comic.id)
//     @JoinColumn()
//     comic!: ComicEntity;
// }