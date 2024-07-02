//39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
//999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
//4 --> 0 (because 4 is already a one-digit number, there is no multiplication)



function persistence(num) {
    let count = 0; 

    function recursivePersistence(n) {
        let convertNumToStrg = n.toString().split('');
        let multiplydigitsPrevAns = 1;

        if (convertNumToStrg.length > 1) {
            for (let i = 0; i < convertNumToStrg.length; i++) {
                multiplydigitsPrevAns *= parseInt(convertNumToStrg[i]);
            }
            count++;
            return recursivePersistence(multiplydigitsPrevAns);
        } else {
            return count;
        }
    }

    return recursivePersistence(num); // Start the recursion
}

let result = persistence(999);
console.log(result); // Output: 3
