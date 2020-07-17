class Hunter extends Traveler {
    constructor (name) {
        super(name)
        this.food = 2
    }

    hunt () {
        this.food += 5
    }

    eat () {
        if (this.food > 1) {
            return this.food -= 2
        } else {
            this.food -= 1
            return this.isHealthy = false
        } 
    }

    giveFood (traveler, numofFoodUnits) {
        traveler.food += numofFoodUnits
        this.food -= numofFoodUnits
    }
}