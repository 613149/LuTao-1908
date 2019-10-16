
;

var plus = (a,b)=>{
    
    return a*b
}

;

var b = 1;

function fitle(n){
    if(n < 3){
        return 1;
    }

    return fitle(n - 1) + fitle(n - 2)
}


;