class CoffeeShopExperience {
    constructor(name: string) {
        this.name = name;
        this.menu = [];
        this.upgrades = [];
    }

    name: string;
    menu: Service[];
    upgrades: Service[];

    printMenu() {
        for (let service of this.menu) {
            // console.log(`${service.name} - ${service.maintenanceCost * service.markup}`);
        }
    }
}

export class Service {
    upgradeCost: number;
    maintenanceCost: number;
    name: string;
    markup: number;
}


const myShop = new CoffeeShopExperience('The Coffee Grinder');
// myShop.name = "The Coffee Grinder";
// myShop.menu = [{
//     name: "Drip Coffee",
//     upgradeCost: 100,

//     maintenanceCost: 0.5,
//     markup: 2,
// }, {
//     name: "Espresso",
//     upgradeCost: 350,

//     maintenanceCost: 1,
//     markup: 3,
// }]