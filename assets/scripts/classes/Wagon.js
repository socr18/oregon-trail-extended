class Wagon {

    constructor (capacity) {
        this.capacity = capacity
        this.passengers = []

    }

    getAvailableSeatCount () {
        return this.capacity - this.passengers.length
    }

    join (traveler) {
        if (this.getAvailableSeatCount() >= 1) {
            this.passengers.push(traveler)
        }
    }

    shouldQuarantine() {
        for (let passengerNumber = 0; passengerNumber < this.passengers.length; passengerNumber += 1) {
            if (this.passengers[passengerNumber].isHealthy === false) {
                return true
            } 
        }
        return false
    }

    totalFood() {
        let totalAvailable = 0
        for (let passengerNumber = 0; passengerNumber < this.passengers.length; passengerNumber += 1) {
            totalAvailable += this.passengers[passengerNumber].food
        }
        return totalAvailable
    }
}