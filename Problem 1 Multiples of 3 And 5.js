function multiplesOf3and5(number) {

    /* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
    The sum of these multiples is 23.
     Find the sum of all the multiples of 3 or 5 below the provided parameter value number. */
    
    // Used sum of arithmetic sequence formula.
    
    let commonDifference=[3,5,-15];
    let multiplesSum=commonDifference.reduce((acc, curVal) =>{ 
        if(curVal>0) {
          return acc+Math.ceil(number/curVal)/2*(Math.ceil(number/curVal)-1)*curVal
        } else if(curVal<0) {
          return acc+Math.ceil(number/curVal)/2*(Math.ceil(number/curVal)-1)*curVal
        } else {
          return 0
        }
      }, 0);
    
    console.log(multiplesSum)
    return multiplesSum;
    }
    
    multiplesOf3and5(49);
