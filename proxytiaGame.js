var nama=''
var peran='Ksatria'
var tahunLahir=1991
var umur=2017-1991
var playerHealth=tahunLahir*Math.random()
var monsterHealth=tahunLahir*Math.random()
var kodeMonster=Math.floor(Math.pow(100, Math.random()))

if(nama.length>0 && peran=='Ksatria') {
  console.log('Selamat datang di Dunia Proxytia, '+nama);
  console.log('Halo Ksatria ' +nama+', kamu dapat menyerang dengan senjatamu!');
} else if(nama.length>0 && peran=='Tabib'){
  console.log('Selamat datang di dunia Proxytia, '+nama);
  console.log('Halo Tabib '+nama+', kamu akan membantu temanmu yang terluka');
} else if(nama.length>0 && peran=='Penyihir'){
  console.log('Selamat datang di Dunia Proxytia, '+nama);
  console.log('Halo Penyihir '+nama+', ciptakan keajaiban yang membantu kemenanganmu!');
}else{
  peran='kacung'
  console.log('Peranmu adalah ' +peran);
}

for(i=0; i<=tahunLahir; i++){
  if(i%umur==0){
    console.log(peran+' '+nama+' menyerang monster')
    monsterHealth-=umur;
  }else if(i%kodeMonster==0){
    console.log('monster menyerang '+peran+' '+nama+' !')
    playerHealth-=kodeMonster;
  }else if(i%umur==0 && i%kodeMonster==0){
    console.log('Health keduanya bertambah')
    playerHealth+=kodeMonster;
    monsterHealth+=umur;
  }
}

console.log(playerHealth)
console.log(monsterHealth)

if (playerHealth>monsterHealth){
  console.log('Selamat, ' +peran+' '+nama+' memenangkan pertarungan')
} else{
  console.log('Sayang sekali, '+peran+' '+nama+' dikalahkan monster')
}