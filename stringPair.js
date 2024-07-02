

function solution(str){
   
    let pairs = []

    if(str.length % 2 === 0) {
        for(let i = 0 ; i < str.length; i+2){
                let pair = str.slice(i , i + 2);
                pairs.push(pair)
        }
           
    }     
    else{
        for(let i = 0 ; i < str.length; i+2){
            if(i === str.length){
                let pair = str[str.length] + "_"
                pairs.push(pair)
            }
            let pair = str.slice(i , i + 2);
            pairs.push(pair)
           
        }
    }
    

    return pairs 
}

console.log(solution("abcdef"))