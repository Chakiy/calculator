const show = document.querySelector("input")
let valueCalc = ""




function number(num){
    valueCalc += num
    console.log(valueCalc)
    show.value = valueCalc
}



function c(){
    valueCalc = ""
    // console.log("aaa")
    show.value = ""
}


function equal(){
    
    show.value = eval(valueCalc)
    valueCalc = ""
}