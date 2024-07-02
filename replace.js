/* Exercice Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" 
for the development and functioning of living organisms.
If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More simila*/

function dnaStrand(dna){
  
    let replaced = dna.split("")

    for(let i = 0 ; i < replaced.length; i++){
        if(replaced[i] == 'A')
        {
            replaced[i] = 'T'
        }
        else if(replaced[i] == 'T'){
            replaced[i] = 'A'
        }
        else if(replaced[i] == 'G'){
            replaced[i] = 'C'
        }
        else{
            replaced[i] = 'G'
        }
    }

    return `${dna} --> ${replaced.join('')}`
}

console.log(dnaStrand("AAAT"))//expected output TTTA
console.log(dnaStrand("ATTGC"))//expected output TAACG
