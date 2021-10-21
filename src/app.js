console.log("Merhaba Kodlama.io")

let dolarDun = 9.20
let dolarBugun = 9.30
dolarDun = "Ankara" //Ankara çalışır

{
    let dolarDun = 9.10 //Bura çalışmaz çünkü parantez içinde
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 //const değeri değiştirilemez

console.log(euroDun)

//array
//camelCasing = isim tanımlama
//PascalCasing
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")



{/*
    <ul>
        <li>Konut Kredisi</li>
        <li>Emlak Konut Kredisi</li>
        Kamu Konut Kredisi</li>
    </ul>
*/}


console.log(konutKredileri)

