//--Aplikasi Voting Sederhana--

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
