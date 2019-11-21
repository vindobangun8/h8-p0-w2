var nama='Gukki'
var peran=''

if(nama){
    if(peran){
        if(peran = 'Ksatria'){
            console.log(`Selamat Datang di dunia proxytia, ${nama}`)
            console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`)
        }
        else if(peran = 'Tabib'){
            console.log(`Selamat Datang di dunia proxytia, ${nama}`)
            console.log(`Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`)
        }
        else if(peran = 'Penyihir'){
            console.log(`Selamat Datang di dunia proxytia, ${nama}`)
            console.log(`Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
        }
        else{
            console.log(`Maaf ${nama}, Peran tersebut belum ada`)
        }
    }
    else {
        console.log(`Halo ${nama}, Pilih peranmu untuk memulai game`)
    }
}
else {
    console.log('Nama harus diiisi')
}