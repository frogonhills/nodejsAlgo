




class Player {
    constructor(name , type){
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`hello I am  ${this.name} and I'm a ${this.type}`);
    }
}


class Wizard extends Player{
    constructor(name , type){
        super(name , type);
    }

    play(){
        console.log(`weeee my type is ${this.type}`);
    }
}


const wizard1 = new Player('shifat' , 'pogrammer');
const wizard2 = new Wizard('akib' , 'chaywala');


wizard1.introduce()
wizard2.play()