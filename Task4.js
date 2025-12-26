let temp = 34
let tempSource = "Celcius"
let convertTo = "Farenheit"

if(tempSource === "Celcius"){
    if(convertTo === "Farenheit"){
        console.log(temp * (9/5) +32)
    }
    else if(convertTo === "Kelvin"){
        console.log(temp + 273.15)
    }
    else{
        console.log(temp * (4/5))
    }
}
else if(tempSource === "Fahrenheit"){
    if(convertTo === "Celcius"){
        console.log((temp-32)*(5/9))
    }
    else if(convertTo === "Kelvin"){
        console.log((temp - 32) * (5/9) + 273.15)
    }
    else{
        console.log((4/9) * (temp-32))
    }
}
else if(tempSource === "Reamur"){
    if(convertTo === "Celcius"){
        console.log(temp * (5/4))
    }
    else if(convertTo === "Fahrenheit"){
        console.log(temp *(9/4) + 32)
    }
    else{
        console.log((5/4)*temp + 273.15)
    }
}
else if(tempSource === "Kelvin"){
    if(convertTo === "Celcius"){
        console.log(temp-273.15)
    }
    else if(converTo === "Fahrenheit"){
        console.log((temp - 273.15) * 9/5 + 32)
    }
    else{
        console.log(0.8 * (K - 273))
    }
}
