class BoardManager{
    cardManager;
    node;
    numImgs;
    curNumCards;

    constructor (id, numImgs, cardManager){
        this.node = document.getElementById(id)

        this.numImgs = numImgs;
        this.cardManager = cardManager;
    
    }
}

clear(){
    this.node.innerHTML = "";
}

fill(numberCards){

}

addCard(card){
    this.node.appendChild(card)
}