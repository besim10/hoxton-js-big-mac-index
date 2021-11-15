const baseCurrency = 5.66

const uSBigMacPrice = 5.65
const britainBigMacPrice = 3.49
const ucraineBigMacPrice = 2.11
const denmarkBigMacPrice = 5.37
const norwayBigMacPrice = 6.79

let poundActualExchangeRate = 0.73
let poundPpp = britainBigMacPrice / uSBigMacPrice

let pppFixed = poundPpp.toFixed(2)

let britainIndex = ((poundActualExchangeRate - pppFixed) / poundActualExchangeRate) * 100

if(britainIndex > baseCurrency){
    console.log("The British pound is " + britainIndex + " undervalued against the US dollar")
}else{
    console.log("The British pound is " + britainIndex + " overvalued against the US dollar")
}

let krunaActualExchangeRate = 8.72
let krunaPpp = norwayBigMacPrice / uSBigMacPrice

pppFixed = krunaPpp.toFixed(2)

let norwayIndex = ((krunaActualExchangeRate - pppFixed) / krunaActualExchangeRate) * 100

if(norwayIndex > baseCurrency){
    console.log("The Norway kruna is " + norwayIndex + " undervalued against the US dollar")
}else{
    console.log("The Norway kruna is " + norwayIndex + " overvalued against the US dollar")
}

let danishActualExchangeRate = 6.53
let danishPpp = denmarkBigMacPrice / uSBigMacPrice

pppFixed = danishPpp.toFixed(2)

let danishIndex = ((danishActualExchangeRate - pppFixed) / danishActualExchangeRate) * 100

if(danishIndex > baseCurrency){
    console.log("The Denmark kruna is " + danishIndex + " undervalued against the US dollar")
}else{
    console.log("The Denmark kruna is " + danishIndex + " overvalued against the US dollar")
}

let ucraineActualExchangeRate = 26.36
let ucrainePpp = ucraineBigMacPrice / uSBigMacPrice

pppFixed = ucrainePpp.toFixed(2)

let ucarineIndex = ((ucraineActualExchangeRate - pppFixed) / ucraineActualExchangeRate) * 100

if(ucarineIndex > baseCurrency){
    console.log("The Ucraine hryvnia is " + ucarineIndex + " undervalued against the US dollar")
}else{
    console.log("The Ucraine hryvnia is " + ucarineIndex + " overvalued against the US dollar")
}
