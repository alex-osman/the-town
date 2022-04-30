// import { Column, Entity, ManyToOne } from 'typeorm';
import { Town } from './town.entity';

// @Entity('person')
export class Person {

    // @Column()
    name: string;

    // @ManyToOne(type => Town, town => town.persons)
    town: Town;
}