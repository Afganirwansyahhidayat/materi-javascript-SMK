function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data berhasil diambil");
        }, 2000);
    });
}

async function getData() {
    console.log("Mengambil data...");
    const data = await fetchData(); // Menunggu hingga fetchData selesai
    console.log(data);
}

getData();
