import { Town } from "./town.entity";


const town = new Town();
town.persons = [{
    name: 'John Doe',
    town: town
}, {
    name: 'Jane Doe',
    town: town
}]