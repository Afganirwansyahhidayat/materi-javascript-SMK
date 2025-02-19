// 1. Buat ngefetch data dari API
// 2. Buat 2 Promise (resolve, reject) pakai then catch


// 1. Fetch data dari API

     

// 2. Buat 2 Promise (resolve, reject) pakai then catch

// Misalkan kita ingin membuat fungsi untuk mengecek stok barang di dua toko yang berbeda. Kita akan membuat dua Promise: satu untuk toko pertama dan satu untuk toko kedua. Kedua Promise akan menyelesaikan (resolve) jika stok barang tersedia dan akan menolak (reject) jika stok barang habis.

  function cekStokBarang() {
    return new Promise((resolve, reject) => {
        const stokTokoPertama = false;
        
        console.log("Mengecek stok barang di toko 1...");
        if (stokTokoPertama) {
            resolve("Stok tersedia di Toko Pertama");
        } else {
            reject("Stok habis di Toko Pertama");
        }   
  })
}

cekStokBarang()
    .then((berhasil) => {
        console.log(berhasil);
    })
    .catch((gagal) => {
        console.error(gagal);
    });