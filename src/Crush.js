export default class Crush {
    sentiment = -5
    neurosis = -10
    libido = 60
    cash = 80
    bookCount = 0

    constructor({crush} = {}){ // const {crush} = props || props = {crush: {}}
        if(crush){
            this.sentiment = crush.sentiment
            this.neurosis = crush.neurosis
            this.libido = crush.libido
            this.bookCount = crush.bookCount
            this.cash = crush.cash
        }
    }

    changeLibidoBySentiment(val) {
        const delSentiment = val - this.sentiment
        this.libido = this.libido + delSentiment * 0.2
    }

    incCash(value){
        this.cash += value
    }
}
