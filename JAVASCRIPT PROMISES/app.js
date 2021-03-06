const inventory = {
    sunglasses: 1,
    pants: 0,
    bags: 1344
  };
  
  // Write your code below:
  function myExecutor( resolve, reject ){
    if(inventory.sunglasses > 0){
      resolve('Sunglasses order processed.')
    }else{
      reject('That item is sold out.')
    }
  }
  
  const orderSunglasses = () => {
    return new Promise(myExecutor);
};

const orderPromise = orderSunglasses();

console.log("yokata: "+orderPromise);
