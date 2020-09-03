function secret(array, enFuncion, clave){
    if(enFuncion == 'encrypt'){
        clave *=-1;
    }
    else if(enFuncion != 'encrypt'){
        return array;
    }
    array.forEach(element => {
        element += clave;
    });
}

mcd = (a,b) =>{
    if(a == b)
        return a;
    else{
        c = Math.min(a,b);
        d = Math.abs(a-b);
        return mcd(c,d);
}
}

function mcd(a,b){
    
}