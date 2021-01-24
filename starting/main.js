const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let x = 0;
let y = 0;

class Field{
    constructor(field){
        this.field = field;
    }

    fieldChange (x, y){
        this.field[x][y] = pathCharacter;
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

  let futurecase = pathCharacter;

while( futurecase!==hat ){
    console.log(futurecase);
    test.print();

    let dir = prompt('Which way? ');
   if( dir === 'r'){
       y++
   } else if( dir === 'l'){
       y--
   } else if( dir === 'u'){
       x--
   } else if( dir === 'd'){
       x++
   }
   futurecase = test.field[x][y];
   test.fieldChange(x, y);
   test.print();
}

console.log('congrat!');
