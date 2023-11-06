SISESTADES NUMBER


const number = parseInt(prompt("Enter an integer: "));

for(let i = 1; i <= 10; i++) {

    const result = i * number;

    console.log(`${number} * ${i} = ${result}`);
}





TERVE KORRUTUSTABEL KUNI 10NI



for (let i = 1; i <= 10; i++) {

    for (let a = 1; a <= 10; a++) {
        console.log(a + "x" + i + "=" + a * i)
    }

}
