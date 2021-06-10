// array hewan
const hewan = ["Kambing", "Kelinci"];

// function untuk menambahkan elemen ke akhir array hewan
const tambahElemenAkhir = (elemen) => {
  return hewan.push(elemen);
};

// panggil function tambahElemenAkhir() dan masukan elemen yang akan ditambahkan
tambahElemenAkhir("Ayam");
tambahElemenAkhir("Bebek");

// cetak array hewan
console.log(hewan);
