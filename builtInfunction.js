var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

  
function dataHandling2(){
  var tanggal=input.slice(3,4)
  var angka= tanggal.toString()
  nama =(input.slice(1,2))
  input.splice(1,1, "Roman Alamsyah Elsharawy")
  input.splice(2,1, "Provinsi Bandar Lampung")
  input.pop()
  input.push("Pria","SMA Internasional Metro")
  tanggal=parseInt(angka.slice(0,2))
  bulan=parseInt(angka.slice(3,5))
  tahun=parseInt(angka.slice(6, 10))
  
  var date = [];
  date.push(tahun, tanggal, bulan)
  
  if(bulan==5){
    bulan="Mei"
  }
  date2 = date.join("-")
  console.log(input)
  console.log(bulan)
  console.log(date2)
  console.log(date)
  console.log(nama)
}
dataHandling2()


