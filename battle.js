class Person{
    constructor(name, weapon, color){
        this.name = name;
        this.weapon = weapon;
        this.color = color;
        this.health = 100;
    }
    attack(something){
        something.health -= this.weapon.damage;
        console.log(`${this.name} attacked ${something.name}`);
        console.log(`${something.name}'s health left ${something.health}`);
    }
}
class Enemy{
    constructor(name, weapon, color){
        this.name = name;
        this.weapon = weapon;
        this.color = color;
        this.health = 100;
    }
    attack(something){
        something.health -= this.weapon.damage;
    }
}

const SMG = {
    name: 'SMG',
    damage: 10
}
const HAND = {
    hand: 'hand',
    damage: 5
}

const john = new Person('john', SMG, 'green');
const enemy_1 = new Enemy('enemy_1', HAND, 'red');
john.attack(enemy_1);
john.attack(enemy_1);
john.attack(enemy_1);