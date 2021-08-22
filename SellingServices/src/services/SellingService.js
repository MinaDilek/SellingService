import Sale from "../models/sell.js"

export default class SellingService {

    constructor() {
        this.sales = [];
    }

    sell(user, game) {

        if (user.age >= game.minAge) {
            let sale = new Sale(user, game)
            this.sales.push(sale)
        } else {
            console.log(`${user.name}, yaşınız ${game.name} adlı oyunu satın almak için yetersiz`)
        }
    }

    list() {
        for (let i = 0; i < this.sales.length; i++) {
            console.log(`${this.sales[i].user.name} adlı kullanıcı ${this.sales[i].game.name} oyununu satın aldı.`)
        }
    }
}