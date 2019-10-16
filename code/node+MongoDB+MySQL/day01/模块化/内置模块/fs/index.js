
console.log(22222);

const plus = (a,b)=>{
    console.log(111)
    return a*b
}

console.log(plus);

const b = 1;

function fitle(n){
    if(n < 3){
        return 1;
    }

    return fitle(n - 1) + fitle(n - 2)
}


console.log(fitle(18));