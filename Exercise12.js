function konversiMenit(menit){
    if(menit >= 60){
        jam = Math.floor(menit / 60)
        mnt = menit % 60
        if (mnt <10){
            return `${jam}:0${mnt}`
        }
        else{
            return `${jam}:${mnt}`
        }
    }
    else{
        jam = 0
        mnt = menit
        return `${jam}:${mnt}`
    }
    
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00