class Ship {
    #hull;
    
    constructor(length) {
        this.#hull = new Array(length);
        for (let i = 0; i < length; ++i) this.#hull[i] = false;
    }
    
    hit(pos) {
        if (!(pos >= 0 && pos <= this.#hull.length)) return;
        this.#hull[pos] = true;
    }
    
    getLength() {
        return this.#hull.length;
    }
    
    getHull() {
        return this.#hull;
    }
    
    isSunk() {
        let isHit = true;
        this.#hull.forEach(hit => {
            if (!hit) isHit = false;
        });
        return isHit;
    }
}

export default Ship;