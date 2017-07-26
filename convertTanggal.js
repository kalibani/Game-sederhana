// 25/02/2017 => 2017, 25 Februari

function convertBulan(bulanAngka) {
  switch(bulanAngka) {
    case '01': return 'Januari';
    case '02': return 'Februari';
    case '03': return 'Maret';
  }
}

function convertTanggal(tanggal) {
  var arrDate = tanggal.split('/');
  var hari = arrDate[0];
  var bulanAngka = arrDate[1];
  var tahun = arrDate[2];
  var bulanTulisan = '';

  bulanTulisan = convertBulan(bulanAngka);
  var hasil = tahun + ', ' + hari + ' ' + bulanTulisan;
  
  return hasil;
}

var tanggalBaru = convertTanggal('25/02/2017');
console.log(tanggalBaru);

var tanggalBaru = convertTanggal('30/01/2017');
console.log(tanggalBaru);



