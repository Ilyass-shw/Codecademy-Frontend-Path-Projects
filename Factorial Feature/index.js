const Calculate = {
  factorial(num){
      if( num === 0 || num === 1 ){
          return 1;
      }else{
        let facNumbers = [];
        for(i=0;i<=num-1;i++){
            facNumbers.push(num-i)
        };
        const fact = facNumbers.reduce((acc, curr)=>{
            return acc*curr;
        });
        return fact;
      }

      }
  }


module.exports = Calculate;


