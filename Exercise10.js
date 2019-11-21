function bandingkanAngka(angka1,angka2){
    if (angka1 < angka2){
        return true
    }
    else if (angka1 > angka2){
        return false
    }
    else {
        return -1
    }
}

console.log(bandingkanAngka(1,1))