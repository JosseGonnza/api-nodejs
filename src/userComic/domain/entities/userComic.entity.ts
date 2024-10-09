import {BaseEntity, Column, Entity} from "typeorm";

@Entity({ name: "userComic" })
export class UserComicEntity extends BaseEntity {
    @Column()
    public userId!: string;
    @Column()
    public comicIds!: string[];

    // public user!: UserEntity;
    // public comic!: ComicEntity;
}