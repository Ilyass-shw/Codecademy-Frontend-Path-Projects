const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field{
    constructor(field){
        this.field = field;
    }

    print() {         
        for(let i=0; i<=this.field.length-1; i++){
        console.log(this.field[i].join(''));}
        }
    }


const test = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
 test.print();
