import Product from "./models/product.js"
import ProductService from "./services/productService.js"
import Game from "./models/game.js"
import GameService from "./services/gameService.js"
import User from "./models/user.js"
import UserService from "./services/userService.js"
import SellingService from "./services/sellingService.js"

let gameService = new GameService();

let game1 = new Game(1, "LOL", 25, 30)
let game2 = new Game(2, "Valorant", 25, 20)
let game3 = new Game(3, "Gta", 25, 1)
let game4 = new Game(4, "Fortnite", 25, 40)
let game5 = new Game(5, "Apex Legends", 25, 20)

gameService.add(game1)
gameService.add(game2)
gameService.add(game3)

let gameToRemove = new Game(3, "Gta", 25, 20)

gameService.remove(gameToRemove)
console.log(gameService.list())


let userService = new UserService();

let user1 = new User(1, "mina", 25)
let user2 = new User(2, "hilal", 20)
let user3 = new User(3, "murat", 25)

userService.add(user1)
userService.add(user2)
userService.add(user3)

userService.remove(user1)
console.log(userService.list())

let sellingService = new SellingService();

sellingService.sell(user1, game1)
sellingService.sell(user1, game2)
sellingService.sell(user1, game3)
sellingService.sell(user1, game4)
sellingService.sell(user1, game5)
sellingService.sell(user2, game1)
sellingService.sell(user2, game2)
sellingService.sell(user2, game3)
sellingService.sell(user3, game1)
sellingService.sell(user3, game3)

sellingService.list()