// import { Entity, OneToMany } from 'typeorm';
import { Experience } from './experience.entity';
import { Person } from './person.entity';

// @Entity('town')
export class Town {

    // @OneToMany(type => Person, person => person.town)
    persons: Person[];
    
    // @OneToMany(type => Experience, experience => experience.town)
    experiences: Experience[];
}