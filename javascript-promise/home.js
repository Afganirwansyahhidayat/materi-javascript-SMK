// Fungsi Afgan
function Afgan(){
    console.log("Afgan mengambil nilai ke 1"); // Mencetak pesan ke konsol
}

// Fungsi Jeffrey
function Jeffrey (){
    return new Promise((resolve, reject) => { // Mengembalikan promise
        setTimeout(()=> {
            resolve("Jeffrey mengambil nilai ke 2"); // Promise diselesaikan setelah 3 detik dengan nilai "Ambil Nilai Kedua"
        }, 3000)
    })
}

// Fungsi Aghis
function Aghis() {
    console.log("Aghis mengambil nilai ke 3"); // Mencetak pesan ke konsol
}

// Memanggil fungsi Afgan
Afgan();

// Memanggil fungsi Jeffrey dan menangani hasil promise
Jeffrey()
    .then((data) => {
        console.log(data); // Mencetak nilai yang diselesaikan oleh promise (yaitu "Ambil Nilai Kedua")
    })
    .then((Aghis) => {
        setTimeout(() => {
            console.log("Aghis mengambil nilai ke 3"); // Mencetak pesan ke konsol
        }, 1000)
    }); // Memanggil fungsi Aghis setelah promise Jeffrey diselesaikan
