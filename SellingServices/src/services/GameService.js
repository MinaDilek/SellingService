export default class GameService{
    constructor(){
        this.games= []
    }

    add(Game){
        if (typeof (game) == "object") {
            this.games.push(game)
        }
    }

    list() {
        return this.games
    }

    remove(game) {
        for (let i = 0; i < this.games.length; i++) {
            if (this.games[i].id === game.id) {
                this.games.splice(i, 1)
            }
        }

    }







}