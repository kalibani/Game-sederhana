var Teman= function(nama, kabar, pekerjaan){
  this.nama=nama;
  this.kabar=kabar;
  this.pekerjaan=pekerjaan;
  this.sapa= function(nama){
    console.log('Halo ' + nama + ', apa kabar?');
  }
  this.balasSapa= function(nama){
    console.log('Halo ' + nama + ', kabarku '+ this.kabar);
  }
  this.tanyaPekerjaan= function(){
    console.log('Apa pekerjaanmu saat ini?');
  }
  this.balasPekerjaan= function(){
    console.log('Pekerjaanku saat ini adalah '+ this.pekerjaan);
  }
  this.berpisah= function(Teman){
    console.log('Senang bertemu denganmu '+Teman.nama+ ' Semoga kamu sukses sebagai '+Teman.pekerjaan);
  }
}

var budi = new Teman('Budi', 'baik', 'developer');
var tono = new Teman('Tono', 'baik', 'chef');
budi.sapa(tono.nama);
tono.balasSapa(budi.nama);
budi.tanyaPekerjaan();
tono.balasPekerjaan();
budi.berpisah(tono);