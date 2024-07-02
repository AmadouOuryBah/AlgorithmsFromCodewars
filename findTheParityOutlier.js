/* Exercie: You are given an array (which will have a length of at least 3, but could be very large) 
  containing integers. The array is either entirely comprised of odd integers or entirely
  comprised of even integers except for a single integer N.
  Write a method that takes the array as an argument and returns this "outlier" N.
*/ 

function findOutlier(integers){

   let oddNumbers= []
   let evenNumbers = []
  
    for(let i = 0 ; i < integers.length; i += 2){

      if(integers[i] % 2 === 0){
        evenNumbers.push(integers[i])
      }
      else{
        oddNumbers.push(integers[i])
      }
    }

    if(evenNumbers.length > oddNumbers.length) {
      return `${oddNumbers[0]} (the only odd number)`
    }
    else{
      return `${evenNumbers[0]} (the only even number)`
    } 
}

console.log(findOutlier([0, 1, 2]))
console.log(findOutlier([1, 2, 3]))
console.log(findOutlier([2,6,8,10,3]))
console.log(findOutlier([0,0,3,0,0]))
console.log(findOutlier([1,1,0,1,1]))
