const Calculate = {
  factorial(num){
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


module.exports = Calculate;


