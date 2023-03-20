

function addClicked() {
    let isAddClicked = true;
    calculateMatrix(isAddClicked);
  }
  
  function subClicked() {
    let isAddClicked = false;
    calculateMatrix(isAddClicked);
  }
  
  function mulClicked() {
    // add code for multiplication
    let val1_1 = parseInt(document.getElementById("val1_1").value);
    let val1_2 = parseInt(document.getElementById("val1_2").value);
    let val1_3 = parseInt(document.getElementById("val1_3").value);
    let val1_4 = parseInt(document.getElementById("val1_4").value);
    let val1_5 = parseInt(document.getElementById("val1_5").value);
    let val1_6 = parseInt(document.getElementById("val1_6").value);
    let val1_7 = parseInt(document.getElementById("val1_7").value);
    let val1_8 = parseInt(document.getElementById("val1_8").value);
    let FirstValues = [val1_1, val1_2, val1_3, val1_4, val1_5, val1_6, val1_7, val1_8];
  
    let val2_1 = parseInt(document.getElementById("val2_1").value);
    let val2_2 = parseInt(document.getElementById("val2_2").value);
    let val2_3 = parseInt(document.getElementById("val2_3").value);
    let val2_4 = parseInt(document.getElementById("val2_4").value);
    let val2_5 = parseInt(document.getElementById("val2_5").value);
    let val2_6 = parseInt(document.getElementById("val2_6").value);
    let val2_7 = parseInt(document.getElementById("val2_7").value);
    let val2_8 = parseInt(document.getElementById("val2_8").value);
    let SecondValues = [val2_1, val2_2, val2_3, val2_4, val2_5, val2_6, val2_7, val2_8];
  
    let res1, res2, res3, res4, res5, res6, res7, res8;
  
    res1 = FirstValues[0] * SecondValues[0];
    res2 = FirstValues[1] * SecondValues[1];
    res3 = FirstValues[2] * SecondValues[2];
    res4 = FirstValues[3] * SecondValues[3];
    res5 = FirstValues[4] * SecondValues[4];
    res6 = FirstValues[5] * SecondValues[5];
    res7 = FirstValues[6] * SecondValues[6];
    res8 = FirstValues[7] * SecondValues[7];
  
    document.querySelector("#res1").value = res1;
    document.querySelector("#res2").value = res2;
    document.querySelector("#res3").value = res3;
    document.querySelector("#res4").value = res4;
    document.querySelector("#res5").value = res5;
    document.querySelector("#res6").value = res6;
    document.querySelector("#res7").value = res7;
    document.querySelector("#res8").value = res8;
  }
  
  function calculateMatrix(isAddClicked) {
    let val1_1 = parseInt(document.getElementById("val1_1").value);
    let val1_2 = parseInt(document.getElementById("val1_2").value);
    let val1_3 = parseInt(document.getElementById("val1_3").value);
    let val1_4 = parseInt(document.getElementById("val1_4").value);
    let val1_5 = parseInt(document.getElementById("val1_5").value);
    let val1_6 = parseInt(document.getElementById("val1_6").value);
    let val1_7 = parseInt(document.getElementById("val1_7").value);
    let val1_8 = parseInt(document.getElementById("val1_8").value);
    let FirstValues = [val1_1, val1_2, val1_3, val1_4, val1_5, val1_6, val1_7, val1_8];
  
    let val2_1 = parseInt(document.getElementById("val2_1").value);
    let val2_2 = parseInt(document.getElementById("val2_2").value);
    let val2_3 = parseInt(document.getElementById("val2_3").value);
    let val2_4 = parseInt(document.getElementById("val2_4").value);
    let val2_5 = parseInt(document.getElementById("val2_5").value);
    let val2_6 = parseInt(document.getElementById("val2_6").value);
    let val2_7 = parseInt(document.getElementById("val2_7").value);
    let val2_8 = parseInt(document.getElementById("val2_8").value);
    let SecondValues = [val2_1, val2_2, val2_3, val2_4, val2_5, val2_6, val2_7, val2_8];
  
    let res1, res2, res3, res4, res5, res6, res7, res8;
  
    if (isAddClicked) {
      res1 = FirstValues[0] + SecondValues[0];
      res2 = FirstValues[1] + SecondValues[1];
      res3 = FirstValues[2] + SecondValues[2];
      res4 = FirstValues[3] + SecondValues[3];
      res5 = FirstValues[4] + SecondValues[4];
      res6 = FirstValues[5] + SecondValues[5];
      res7 = FirstValues[6] + SecondValues[6];
      res8 = FirstValues[7] + SecondValues[7];
    } else {
      res1 = FirstValues[0] - SecondValues[0];
      res2 = FirstValues[1] - SecondValues[1];
      res3 = FirstValues[2] - SecondValues[2];
      res4 = FirstValues[3] - SecondValues[3];
      res5 = FirstValues[4] - SecondValues[4];
      res6 = FirstValues[5] - SecondValues[5];
      res7 = FirstValues[6] - SecondValues[6];
      res8 = FirstValues[7] - SecondValues[7];  
    }
  
    document.querySelector("#res1").value = res1;
    document.querySelector("#res2").value = res2;
    document.querySelector("#res3").value = res3;
    document.querySelector("#res4").value = res4;
    document.querySelector("#res5").value = res5;
    document.querySelector("#res6").value = res6;
    document.querySelector("#res7").value = res7;
    document.querySelector("#res8").value = res8;
  }
  
