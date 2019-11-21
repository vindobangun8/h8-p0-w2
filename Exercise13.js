function xo(str){
    os=0
    xs=0
    for(i=0;i<str.length;i++){
        if(str[i] == 'o'){
            os+=1
        }
        else if(str[i] == 'x'){
            xs+=1
        }
    }
    if(xs == os){
        return true
    }
    else{
        return false
    }
}
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true