let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let fromEuroToDollar =(euro)=>{
return euro*oneEuroIs.USD;
}
let fromDollarToYen=(dollar)=>{
     let dollarConv =(dollar*(oneEuroIs.JPY/oneEuroIs.USD));
     return parseFloat(dollarConv)
}
let fromYenToPound=(yen)=>{
    return yen*(oneEuroIs.GBP/oneEuroIs.JPY);
}

module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound};