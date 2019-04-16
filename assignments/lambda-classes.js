// CODE here for your Lambda Classes


class VideoGame {
    constructor (attributes) {
        this.name = attributes.name;
        this.createdAt = new Date();
        this.dimensions = attributes.dimensions;
    }
    destroy () {
         return `${this.name} was removed from the game.`

    }

}

class CharacterStats {


    constructor (attributes) {
        this.healthPoints = attributes.healthPoints
    }

    takeDamage () {
        return `${this.name} was removed from the game.`
    }
}

class Humanoid {
    constructor (attributes) {
        this.team = attibutes.team
        this.weapons = attributes.weapons 
        this.language = attributes.language
    }

    greet () {
        return `${this.name} offers a greeting in ${this.language}.`

    }
}