function myFunc(...manyMoreArgs) {
    console.log('manyMoreArgs', manyMoreArgs);
  }
   
  myFunc('one', 'two', 'three');

  // Rest operator memungkinkan function untuk menerima argument dalam bentuk array. Rest operator yang digunakan pada parameter fungsi sering disebut sebagai Rest Parameter. Cara menggunakan rest parameter adalah dengan menambahkan tiga titik (...) sebelum parameter terakhir.