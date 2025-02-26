function cuciBaju() {
    return new Promise(resolve => {
        console.log("🧺 Memulai mencuci baju...");
        setTimeout(() => {
            console.log("✅ Pakaian selesai dicuci!");
            resolve();
        }, 5000); // Simulasi mencuci baju dalam 5 detik
    });
}

async function mulaiCuciBaju() {
    console.log("🔄 Masukkan baju ke mesin...");
    const mencuci = cuciBaju();
    console.log("🧹 Sambil menunggu, menyapu rumah...");
    await mencuci; // Tunggu mencuci selesai
    console.log("👕 Jemur pakaian!");
}

mulaiCuciBaju();
    