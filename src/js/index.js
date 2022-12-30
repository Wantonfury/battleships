import Ship from './factories/ship';
import Gameboard from './factories/gameboard';
import Render from './factories/render';
import Player from './factories/player';
import '../css/index.css';

class App {
    #gameboardLeft = null;
    #gameboardRight = null;
    #player = null;
    #ai = null;
    #render = null;
    
    constructor() {
        this.#gameboardLeft = new Gameboard();
        this.#gameboardRight = new Gameboard();
        this.#player = new Player();
        this.#ai = new Player;
        
        this.#render = new Render(this.#gameboardLeft, this.#gameboardRight, 
            this.eventClickGameboardLeft, this.eventClickGameboardRight);
        this.#render();
    }
    
    eventClickGameboardLeft(e) {
        
    }
    
    eventClickGameboardRight(e) {
        
    }
    
    render() {
        this.#render.renderGameboards(this.#gameboardLeft, this.#gameboardRight);
    }
}

const app = new App();