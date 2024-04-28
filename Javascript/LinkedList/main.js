class cookie {
    constructor(color){
        this.color = color;
    }

    getColor(){
        return this.color;
    }

    setColor(color){
        this.color = color;
    }
}


const galletita = new  cookie('green')
const galletita2 = new  cookie('Blue')

console.log(galletita.color);
console.log(galletita2.color);