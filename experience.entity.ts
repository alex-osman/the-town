// import { Column, Entity, ManyToOne } from 'typeorm';
import { Town } from './town.entity';

// @Entity('experience')
export class Experience {

    // @Column()
    name: string;

    // @ManyToOne(type => Town, town => town.persons)
    town: Town[];
}