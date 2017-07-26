var Human1 = {
      nama: ['Tono','Tono','Tono'],
      hari: ['senin','rabu','jumat'],
      kehadiran: ['masuk','masuk','absen'],
      alasan: ['','','dines luar']
}

for(i=0; i<=Human1.nama.length; i++){
  if(Human1.nama[i]=== 'Tono'){
    console.log('Nama: ' +Human1.nama[i]); 
    console.log('Hari: ' +Human1.hari[i]);
    console.log('Kehadiran: ' +Human1.kehadiran[i]);
    if(Human1.kehadiran[i]=== 'absen'){
      console.log('alasan: ' +Human1.alasan[i])
    }
    
  }
}

if(Human1.kehadiran[i]=== 'masuk'){
      totalMasuk+=1
    }else{
      totalAbsen+=1
    }

var totalHari=Human1.hari.length
var totalMasuk=0
var totalAbsen=0

console.log('Total hari kerja minggu ini: '+totalHari+' Hari')
console.log('Total masuk: '+totalMasuk+' hari')
console.log('Total absen: '+totalAbsen+' hari')