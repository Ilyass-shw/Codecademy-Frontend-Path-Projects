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

  let futurecase = test.field[x][y];

while( futurecase !== hat ){
    
    if(futurecase === hole){
        throw Error('Sorry, you fell down a hole');
    
    } else if( !futurecase ){
        throw Error('Sorry, out of bounderies');
        
    }
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

   try {
    futurecase = test.field[x][y];
   }catch(e){
       throw Error('out of boundries')
   }

   test.fieldChange(x, y);
}

console.log('congrat!');
