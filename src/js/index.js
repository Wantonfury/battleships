import Ship from './factories/ship';
import Gameboard from './factories/gameboard';
import Render from './factories/render';
import Player from './factories/player';
import '../css/index.css';

class App {
    #gameboardLeft = null;
    #gameboardRight = null;
    #player1 = null;
    #player2 = null;
    #vsAI = true;
    #render = null;
    
    constructor() {
        this.#gameboardLeft = new Gameboard();
        this.#gameboardRight = new Gameboard();
        this.#player1 = new Player();
        this.#player2 = new Player;
        
        this.#gameboardLeft.addShip(Gameboard.shipTypes.carrier, 3, 0, false);
        this.#gameboardLeft.addShip(Gameboard.shipTypes.submarine, 1, 8, true);
        this.#gameboardLeft.addShip(Gameboard.shipTypes.destroyer, 7, 8, true);
        this.#gameboardLeft.addShip(Gameboard.shipTypes.patrolBoat, 7, 1, false);
        this.#gameboardLeft.addShip(Gameboard.shipTypes.battleship, 5, 5, true);
        
        this.#gameboardRight.addShip(Gameboard.shipTypes.carrier, 3, 0, false);
        this.#gameboardRight.addShip(Gameboard.shipTypes.submarine, 1, 8, true);
        this.#gameboardRight.addShip(Gameboard.shipTypes.destroyer, 7, 8, true);
        this.#gameboardRight.addShip(Gameboard.shipTypes.patrolBoat, 7, 1, false);
        this.#gameboardRight.addShip(Gameboard.shipTypes.battleship, 5, 5, true);
        
        this.#render = new Render(this.#gameboardLeft, this.#gameboardRight, 
            this.eventClickGameboardLeft.bind(this), this.eventClickGameboardRight.bind(this));
        this.render();
        
        this.#player1.active = true;
    }
    
    eventClickGameboardLeft(e) {
        
    }
    
    eventClickGameboardRight(e) {
        if (!this.#player1.active) return;
        
        this.#player1.attack(this.#gameboardRight, e.target.dataset.i, e.target.dataset.j);
        this.render();
        this.switchActivePlayer();
        
        if (!this.checkWin()) setTimeout(this.delayAIAttack.bind(this), 500);
    }
    
    delayAIAttack() {
        if (this.#vsAI) this.#player2.randomAttack(this.#gameboardLeft);
        this.render();
        this.switchActivePlayer();
        this.checkWin();
    }
    
    switchActivePlayer() {
        if (this.#player1.active) {
            this.#player1.active = false;
            this.#player2.active = true;
        }
        else{
            this.#player1.active = true;
            this.#player2.active = false;
        }
    }
    
    resetGameboards() {
        this.#gameboardLeft.reset();
        this.#gameboardRight.reset();
        document.querySelector('#win').textContent = '';
        this.render();
    }
    
    checkWin() {
        let win = false;
        
        if (this.#gameboardLeft.allSunk()) {
            // Player 2 victory
            document.querySelector('#win').textContent = 'You lost!';
            win = true;
        }
        else if (this.#gameboardRight.allSunk()) {
            // Player 1 victory
            document.querySelector('#win').textContent = 'You win!';
            win = true;
        }
        
        if (win) setTimeout(this.resetGameboards.bind(this), 1000);
        
        return win;
    }
    
    
    
    render() {
        this.#render.renderGameboards(this.#gameboardLeft, this.#gameboardRight);
    }
}

const app = new App();