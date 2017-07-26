function deret(n){
  var hasil=1;
    for(var i=n; i>0; i--){
      hasil *=i;
    }
  return hasil;
}
console.log(deret(5));

