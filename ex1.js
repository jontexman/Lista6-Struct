let ano= 1900;

while(ano <= 2000) {
    if((ano%4==0 && ano%100 != 0)|| ano%400 == 0 ) {
        console.log(ano);
        ano++;  
    }
    else {
        ano++;
    }
}