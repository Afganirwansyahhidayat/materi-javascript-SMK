async function cekIP() {
    try {
        // Ambil nilai input dari user
        const ip = document.getElementById("input").value.trim();

        // Regex untuk validasi IP Address
        const ipRegex  = /^(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)$/;

        // Validasi format IP
        if (!ipRegex.test(ip)) {
            document.getElementById("hasil").innerHTML = "Masukkan IP yang benar!";
            return;
        }

        // Panggil API untuk mendapatkan data IP
        const response = await fetch(`https://ipapi.co/${ip}/json/`);

        // Cek apakah response berhasil
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Ubah response ke JSON
        const data = await response.json();

        // Tampilkan hasilnya di halaman
        document.getElementById("hasil").innerHTML = `
            <strong>IP Address:</strong> ${data.ip} <br>
            <strong>Kota:</strong> ${data.city} <br>
            <strong>Negara:</strong> ${data.country_name} <br>
            <strong>Provider:</strong> ${data.org}
        `;

        console.log(data); // Log ke console untuk debugging
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("hasil").innerHTML = "Gagal mendapatkan data IP.";
    }
}



// fetch("https://api.deezer.com/search?q=Coldplay")
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));


// var fetch = require('node-fetch');
// var requestOptions = {
//   method: 'GET',
// };

// fetch("https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=YOUR_API_KEY", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
