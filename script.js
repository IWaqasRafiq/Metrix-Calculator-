
function calculateMetrix(operation) {

    let val1_1 = parseInt(document.getElementById("val1_1").value);
    let val1_2 = parseInt(document.getElementById("val1_2").value);
    let val1_3 = parseInt(document.getElementById("val1_3").value);
    let val1_4 = parseInt(document.getElementById("val1_4").value);

    let FirstValues = [val1_1, val1_2, val1_3, val1_4]
    

    let val2_1 = parseInt(document.getElementById("val2_1").value);
    let val2_2 = parseInt(document.getElementById("val2_2").value);
    let val2_3 = parseInt(document.getElementById("val2_3").value);
    let val2_4 = parseInt(document.getElementById("val2_4").value);
    
    let SecondValues = [val2_1, val2_2, val2_3, val2_4]

    res1 = FirstValues[0] + SecondValues[0]
    res2 = FirstValues[1] + SecondValues[1]
    res3 = FirstValues[2] + SecondValues[2]
    res4 = FirstValues[3] + SecondValues[3]

    document.querySelector("#res2").innerHTML = res2
    document.querySelector("#res1").innerHTML = res1
    document.querySelector("#res3").innerHTML = res3
    document.querySelector("#res4").innerHTML = res4
}
