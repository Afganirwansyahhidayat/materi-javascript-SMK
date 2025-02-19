function inputData() { // Membuat fungsi inputData
    return new Promise((resolve, reject) => {
        const stokTokoPertama = null;
        
        console.log("Sedang Menginput Data...");
        setTimeout(() => {
            if (stokTokoPertama) {
                resolve("Data Berhasil Diinput");
            } else {
                reject("Data Gagal Diinput");
            }   
        }, 3000);
    });
}

function fetchData() { // Membuat fungsi fetchData
    return fetch('https://jsonplaceholder.typicode.com/invalid-url') // URL tidak valid
    .then(response => {
        if (!response.ok) {
            throw new Error(`Invalid connection! Status: ${response.status}`);
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error saat fetch:', error.message);
        throw error;
    });
}

// Jalankan fetchData() langsung agar error terjadi di awal
fetchData()
    .then(user => {
        console.log('User data:', user);
    })
    .catch(error => {
        console.error('Fetch gagal:', error.message);
    });

// Jalankan inputData() secara terpisah
inputData()
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error('Input data gagal:', error);
    });
