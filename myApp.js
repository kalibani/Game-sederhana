//--Aplikasi Voting Sederhana--

//Langkah pertama yaitu membuat objek pemilih
//selanjutnya menampilkan daftar calon
//membuat objek pemilih baru
//memasukkan pilihan dari objek pemilih
//menampilkan hasil pilihan
//menghitung suara hasil pemilihan

// PSEUDOCODE 
/* 
SIMPAN array yang berisi nama-nama calon pada `namaCalon`
SIMPAN sebuah objek dengan constructor function pada `Pemilih` dengan parameter `idPemilih`, `namaPemilih` dan `calon`
SIMPAN parameter `idPemilih` pada property `ID`
SIMPAN parameter `namaPemilih` pada property `nama`
SIMPAN parameter `calon` pada property `calon`

SIMPAN sebuah method untuk menampilkan daftar calon pada `daftarCalon`
 IF panjang karakter pada property `ID` sama dengan 4
  TAMPILKAN 'Selamat Datang' property `nama`
  TAMPILKAN 'Berikut adalah nama-nama calon yatu :'
  TAMPILKAN 'Calon no urut 1 :' dari array `namaCalon` indeks ke 0
  TAMPILKAN 'Calon no urut 2 :' dari array `namaCalon` indeks ke 1
  TAMPILKAN 'Calon no urut 3 :' dari array `namaCalon` indeks ke 2
  TAMPILKAN 'Silakan Pilih!'
 ELSE
  TAMPILKAN 'Maaf Anda Tidak Terdaftar Sebagai Pemilih'

SIMPAN sebuah method baru untuk menampilkan hasil pilihan pada `tampilPilihan`
 IF property `calon` identik dengan 'Jokowi' atau identik dengan 'SBY' atau identik dengan 'Prabowo'
  TAMPILKAN 'ID:' dari property `ID` 'Memilih' property `calon`
 ELSE
  TAMPILKAN 'Pilihan ID ' dari property `ID` 'Tidak Sah'

SIMPAN sebuah method baru untuk menghitung suara pada `hitungSuara`
 IF property `calon` identik dengan 'Jokowi'
  SIMPAN `suaraCalon1` ditambah dengan 1
 ELSE IF property `calon` identik dengan 'SBY'
  SIMPAN `suaraCalon2` ditambah dengan 1
 ELSE IF property `calon` identik dengan 'Prabowo'
  SIMPAN `suaraCalon3` ditambah dengan 1
 ELSE 
  SIMPAN `suaraTidaksah` ditambah dengan 1

//Membuat objek pemilih baru
SIMPAN objek baru dengan nama `pemilih1` yang merujuk pada main objek `Pemilih`, INPUT nilai pada parameter `idPemilih dan `namaPemilih`
SIMPAN objek baru dengan nama `pemilih2` yang merujuk pada main objek `Pemilih`, INPUT nilai pada parameter `idPemilih dan `namaPemilih`
SIMPAN objek baru dengan nama `pemilih3` yang merujuk pada main objek `Pemilih`, INPUT nilai pada parameter `idPemilih dan `namaPemilih`
SIMPAN objek baru dengan nama `pemilih4` yang merujuk pada main objek `Pemilih`, INPUT nilai pada parameter `idPemilih dan `namaPemilih`
SIMPAN objek baru dengan nama `pemilih5` yang merujuk pada main objek `Pemilih`, INPUT nilai pada parameter `idPemilih dan `namaPemilih`
SIMPAN objek baru dengan nama `pemilih6` yang merujuk pada main objek `Pemilih`, INPUT nilai pada parameter `idPemilih dan `namaPemilih`
SIMPAN objek baru dengan nama `pemilih7` yang merujuk pada main objek `Pemilih`, INPUT nilai pada parameter `idPemilih dan `namaPemilih`
SIMPAN objek baru dengan nama `pemilih8` yang merujuk pada main objek `Pemilih`, INPUT nilai pada parameter `idPemilih dan `namaPemilih`
SIMPAN objek baru dengan nama `pemilih9` yang merujuk pada main objek `Pemilih`, INPUT nilai pada parameter `idPemilih dan `namaPemilih`
SIMPAN objek baru dengan nama `pemilih10` yang merujuk pada main objek `Pemilih`, INPUT nilai pada parameter `idPemilih dan `namaPemilih`

//Memanggil method untuk menampilkan objek pemilih serta daftar calon
PANGGIL method `daftarCalon` dari objek `pemilih1`
PANGGIL method `daftarCalon` dari objek `pemilih2`
PANGGIL method `daftarCalon` dari objek `pemilih3`
PANGGIL method `daftarCalon` dari objek `pemilih4`
PANGGIL method `daftarCalon` dari objek `pemilih5`
PANGGIL method `daftarCalon` dari objek `pemilih6`
PANGGIL method `daftarCalon` dari objek `pemilih7`
PANGGIL method `daftarCalon` dari objek `pemilih8`
PANGGIL method `daftarCalon` dari objek `pemilih9`
PANGGIL method `daftarCalon` dari objek `pemilih10`

//Objek pemilih memasukkan nama calon pilihannya
SIMPAN nama calon dari pilihan objek `pemilih1`
SIMPAN nama calon dari pilihan objek `pemilih2`
SIMPAN nama calon dari pilihan objek `pemilih3`
SIMPAN nama calon dari pilihan objek `pemilih4`
SIMPAN nama calon dari pilihan objek `pemilih5`
SIMPAN nama calon dari pilihan objek `pemilih6`
SIMPAN nama calon dari pilihan objek `pemilih7`
SIMPAN nama calon dari pilihan objek `pemilih8`
SIMPAN nama calon dari pilihan objek `pemilih9`
SIMPAN nama calon dari pilihan objek `pemilih10`

//Memanggil method untuk menampilkan hasil pilihan
PANGGIL method `tampilPilihan dari objek `pemilih1`
PANGGIL method `tampilPilihan dari objek `pemilih2`
PANGGIL method `tampilPilihan dari objek `pemilih3`
PANGGIL method `tampilPilihan dari objek `pemilih4`
PANGGIL method `tampilPilihan dari objek `pemilih5`
PANGGIL method `tampilPilihan dari objek `pemilih6`
PANGGIL method `tampilPilihan dari objek `pemilih7`
PANGGIL method `tampilPilihan dari objek `pemilih8`
PANGGIL method `tampilPilihan dari objek `pemilih9`
PANGGIL method `tampilPilihan dari objek `pemilih10`

SIMPAN angka 0 pada `suaraCalon1`
SIMPAN angka 0 pada `suaraCalon2`
SIMPAN angka 0 pada `suaraCalon3`
SIMPAN angka 0 pada `suaraSah`
SIMPAN angka 0 pada `suaraTidaksah`

//Memanggil method untuk menghitung suara
PANGGIL method `hitungSuara` dari objek 'pemilih1`
PANGGIL method `hitungSuara` dari objek 'pemilih2`
PANGGIL method `hitungSuara` dari objek 'pemilih3`
PANGGIL method `hitungSuara` dari objek 'pemilih4`
PANGGIL method `hitungSuara` dari objek 'pemilih5`
PANGGIL method `hitungSuara` dari objek 'pemilih6`
PANGGIL method `hitungSuara` dari objek 'pemilih7`
PANGGIL method `hitungSuara` dari objek 'pemilih8`
PANGGIL method `hitungSuara` dari objek 'pemilih9`
PANGGIL method `hitungSuara` dari objek 'pemilih10`

TAMPILKAN 'Jumlah Suara Calon No 1: ' dari `suaraCalon1`
TAMPILKAN 'Jumlah Suara Calon No 2: ' dari `suaraCalon2`
TAMPILKAN 'Jumlah Suara Calon No 3: ' dari `suaraCalon3`
IF `suaraCalon1` lebih dari `suaraCalon2` dan `suaraCalon1` lebih dari `suaraCalon3`
 TAMPILKAN 'Perolehan Suara Terbanyak Yaitu ' `namaCalon` indeks ke 0
ELSE IF `suaraCalon2` lebih dari `suaraCalon1` dan `suaraCalon2` lebih dari `suaraCalon3`
 TAMPILKAN 'Perolehan Suara Terbanyak Yaitu ' `namaCalon` indeks ke 1
ELSE IF `suaraCalon3` lebih dari `suaraCalon1` dan `suaraCalon3` lebih dari `suaraCalon2`
 TAMPILKAN 'Perolehan Suara Terbanyak Yaitu ' `namaCalon` indeks ke 2
ELSE
 TAMPILKAN 'Tidak ada pemenang dalam pemilihan ini'

SIMPAN `totalSuara` dengan `suaraCalon1` ditambah `suaraCalon2` ditambah `suaraCalon3` ditambah `suaraTidaksah`
SIMPAN `suaraSah` dengan `totalSuara` dikurangi `suaraTidaksah`
TAMPILKAN 'Jumlah Suara Sah Sebanyak: ' dari nilai `suaraSah`
TAMPILKAN 'Jumlah Suara Tidak Sah Sebanyak: ' dari nilai `suaraTidaksah`
TAMPILKAN 'Total Suara yang Masuk: ' dari nilai `totalSuara`

*/


var namaCalon=['Jokowi','SBY','Prabowo'];

//Membuat Objek Pemilih dengan constructor function
var Pemilih=function(idPemilih, namaPemilih, calon){
  this.ID=idPemilih;
  this.nama=namaPemilih;
  this.calon=calon;
  //method untuk menampilkan menampilkan daftar calon
  this.daftarCalon=function(){
   if(this.ID.length ==4){
     console.log('Selamat Datang '+this.nama);
     console.log('Berikut adalah nama-nama calon yaitu :');
     console.log('Calon No urut 1 : '+namaCalon[0]);
     console.log('Calon No urut 2 : '+namaCalon[1]);
     console.log('Calon No urut 3 : '+namaCalon[2]);
     console.log('Silakan Pilih!');
  }else{
    console.log('Maaf Anda Tidak Terdaftar Sebagai Pemilih');
  } 
 }
  //method untuk menampilkan hasil pilihan
  this.tampilPilihan= function(){ 
    if(this.calon==='Jokowi' || this.calon==='SBY' || this.calon==='Prabowo'){
      console.log('ID: '+this.ID+ ' Memilih '+this.calon);
    } else{
      console.log('Pilihan ID '+this.ID +' Tidak Sah');
    }
  }
  //method untuk menghitung suara
  this.hitungSuara= function(){ 
    if(this.calon==='Jokowi'){
    suaraCalon1+=1;
   }else if(this.calon==='SBY'){
    suaraCalon2+=1;
   }else if(this.calon==='Prabowo'){
    suaraCalon3+=1;
   } else{
     suaraTidaksah+=1;
   }
  }
}

//Membuat objek pemilih baru
var pemilih1 = new Pemilih('1011','Tono');
var pemilih2 = new Pemilih('1012','Dono');
var pemilih3 = new Pemilih('1013','Bono');
var pemilih4 = new Pemilih('1014','Toni');
var pemilih5 = new Pemilih('1015','Dimas');
var pemilih6 = new Pemilih('1016','Jaya');
var pemilih7 = new Pemilih('1017','Nanang');
var pemilih8 = new Pemilih('1018','Andra');
var pemilih9 = new Pemilih('1019','Nanang');
var pemilih10 = new Pemilih('1020','Ana');

//Menampilkan objek pemilih serta daftar calon
pemilih1.daftarCalon();
pemilih2.daftarCalon();
pemilih3.daftarCalon();
pemilih4.daftarCalon();
pemilih5.daftarCalon();
pemilih6.daftarCalon();
pemilih7.daftarCalon();
pemilih8.daftarCalon();
pemilih9.daftarCalon();
pemilih10.daftarCalon();

//Objek pemilih memasukkan nama calon pilihannya
pemilih1.calon='Prabowo';
pemilih2.calon='Prabowo';
pemilih3.calon='Prabowo';
pemilih4.calon='SBY';
pemilih5.calon='SBY';
pemilih6.calon='Jokowi';
pemilih7.calon='Jokowi';
pemilih8.calon='Jokowi';
pemilih9.calon='Prabowo';
pemilih10.calon='Jokowi';

//Menampilkan hasil pilihan dari masing-masing pemilih
pemilih1.tampilPilihan();
pemilih2.tampilPilihan();
pemilih3.tampilPilihan();
pemilih4.tampilPilihan();
pemilih5.tampilPilihan();
pemilih6.tampilPilihan();
pemilih7.tampilPilihan();
pemilih8.tampilPilihan();
pemilih9.tampilPilihan();
pemilih10.tampilPilihan();

var suaraCalon1=0;
var suaraCalon2=0;
var suaraCalon3=0;
var suaraSah=0;
var suaraTidaksah=0;

//Memanggil method untuk menghitung suara
pemilih1.hitungSuara();
pemilih2.hitungSuara();
pemilih3.hitungSuara();
pemilih4.hitungSuara();
pemilih5.hitungSuara();
pemilih6.hitungSuara();
pemilih7.hitungSuara();
pemilih8.hitungSuara();
pemilih9.hitungSuara();
pemilih10.hitungSuara();

//Mencetak hasil penghitungan suara
console.log('Jumlah Suara Calon No 1: '+suaraCalon1);
console.log('Jumlah Suara Calon No 2: '+suaraCalon2);
console.log('Jumlah Suara Calon No 3: '+suaraCalon3);
if(suaraCalon1>suaraCalon2 && suaraCalon1>suaraCalon3){
 console.log('Perolehan Suara Terbanyak Yaitu '+namaCalon[0]+' Dengan jumlah '+suaraCalon1+' Suara'); 
}else if(suaraCalon2>suaraCalon1 && suaraCalon2>suaraCalon3){
 console.log('Perolehan Suara Terbanyak Yaitu '+namaCalon[1]+' Dengan jumlah '+suaraCalon2+' Suara'); 
}else if(suaraCalon3>suaraCalon1 && suaraCalon3>suaraCalon2){
  console.log('Perolehan Suara Terbanyak Yaitu '+namaCalon[2]+' Dengan jumlah '+suaraCalon3+' Suara');
}else{
  console.log('Tidak ada pemenang dalam pemilihan ini');
}
var totalSuara= suaraCalon1+suaraCalon2+suaraCalon3+suaraTidaksah;
var suaraSah= totalSuara - suaraTidaksah;
console.log('Jumlah Suara Sah Sebanyak: '+suaraSah);
console.log('Jumlah Suara Tidak Sah Sebanyak: '+suaraTidaksah);
console.log('Total Suara yang Masuk: '+totalSuara) ;
