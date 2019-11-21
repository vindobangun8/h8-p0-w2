//soal 1
// var i =0
// console.log("looping Pertama")
// while(i<20){
//     i+=2
//     console.log(i," - I love coding")
// }

// console.log("looping kedua")
// while(i>0){
//     console.log(i,"I will become fullstack developer")
//     i-=2
// }

//soal 2
// console.log("Looping Pertama")
// for(i=1;i<21;i++){
//     console.log(i," - I love coding")
// }
// console.log("Looping Kedua")
// for(i=20;i>0;i--){
//     console.log(i," - I will become fullstack developer")
// }

//soal 3
//Angka Genap Ganjil
for(i=1;i<=100;i++){
    if (i % 2 == 0){
        console.log(i,"Angka Genap")
    }
    else{
        console.log(i,"Angka Ganjil")
    }
}

//Counter 2
for(i=1;i<=100;i=i+2){
    if(i % 3 ==0){
        console.log(i," Kelipatan 3")
    }
}

//Counter 3
for(i=1;i<=100;i=i+5){
    if(i % 6 ==0){
        console.log(i," Kelipatan 6")
    }
}

//Counter 10
for(i=1;i<=100;i=i+9){
    if(i % 10 ==0){
        console.log(i," Kelipatan 10")
    }
}
