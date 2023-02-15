// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength = this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    //hereda H y S  y se le agrega name
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }

    }

    battleCry() {

        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }

}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking)

    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        let vikingRandom = Math.floor(Math.random() * this.vikingArmy.length)
        let saxonRandom = Math.floor(Math.random() * this.saxonArmy.length)
        let res = this.saxonArmy[saxonRandom].receiveDamage(this.vikingArmy[vikingRandom].strength)
        this.saxonArmy.pop()

        return res
    }

    saxonAttack() {
        let vikingRandom = Math.floor(Math.random() * this.vikingArmy.length)
        let saxonRandom = Math.floor(Math.random() * this.saxonArmy.length)
        let res = this.vikingArmy[vikingRandom].receiveDamage(this.saxonArmy[saxonRandom].strength)

        this.vikingArmy.forEach((viking, i) => {
            if (viking.health <= 0) {
                this.vikingArmy.splice(this.vikingArmy[i], 1)
            }
        })

        return res
    }


    showStatus() {
        if (this.saxonArmy == 0) {
            return "Vikings have won the war of the century!"
        } else if ( this.vikingArmy == 0) {
            return "Saxons have fought for their lives and survived another day..."
        }else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

}
