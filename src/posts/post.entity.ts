import { BaseEntity } from "src/base-entity";
import { Column, Entity } from "typeorm";

@Entity('posts')
export class Post extends BaseEntity {

    @Column({type: 'varchar', length: 100, nullable: false})
    name: string;

    @Column({type: 'varchar', length: 100, nullable: true})
    domain: string;

    @Column({type: 'text', nullable: true, default: null})
    description: string;

}

//hello//