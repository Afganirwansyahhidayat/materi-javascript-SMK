function inputData() { // Membuat fungsi inputData
    return new Promise((resolve, reject) => {
        const dataSiswa = true; // Menentukan stok toko pertama
        
        console.log("Sedang Menginput Data...");
        setTimeout(() => {
            if (dataSiswa) {
                resolve("Data Berhasil Diinput ke Database");
            } else {
                reject("Data Gagal Diinput ke Database");
            }   
        }, 3000);
    });
}

function fetchData() {
    return fetch('data.json') // Mengambil data dari file dari json
        .then(response => {
            if (response.ok) {
                return response.json(); // Mengubah response ke JSON jika sukses
            } else {
                throw new Error(`Invalid connection! Status: ${response.status}`);
            }
        })
        .catch(error => {
            console.error('Error saat fetch:', error.message);
            throw error;
        });
    }

// Jalankan fetchData() langsung agar error terjadi di awal
setTimeout(() => {
        fetchData()
        .then(user => {
            console.log('User data:', user);
        })
        .catch(error => {
            console.error('Fetch gagal:', error.message);
        });
        

    }, 4000)

// Jalankan inputData() secara terpisah
inputData()
    .then(response => {
        console.log(response);  // Fetch data hanya jika input berhasil
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });
