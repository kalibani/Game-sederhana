//fungsi rekursif deret1
function deret1(n){
  if(n === 0) return 1;
  return n * deret1(n-1);
}
console.log(deret1(5));

//Fungsi rekursif deret2
function deret2(o, p) {
    return +(o < 1) || o * deret2(o - p, p);
}
console.log(deret2(12, 5));

