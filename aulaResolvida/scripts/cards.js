class Cardmanager{
	flippedCards = new Set();
	urlFactory;

	constructor(factory){
		this.urlFactory = factory;
	}

    gen(heroNumber){
        let template = document.getElementById("cardTemplate")
        let clone = template.content.cloneNode(true)

        return clone
    }
}