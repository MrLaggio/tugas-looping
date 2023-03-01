let sum = "";
while(true){
    let value = prompt("masukan sebuah angka", "");
    if(!value) break;

    sum += value;
}
alert(`sum :` + sum);