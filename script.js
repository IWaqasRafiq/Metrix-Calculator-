// function createMatrix() {
//     var rows = document.getElementById("rows").value;
//     var columns = document.getElementById("columns").value;
//     var matrixHTML = "<table>";
//     for (var i = 0; i < rows; i++) {
//         matrixHTML += "<tr>";
//         for (var j = 0; j < columns; j++) {
//             matrixHTML += "<td><input type='number' id='a" + i + j + "'></td>";
//         }
//         matrixHTML += "</tr>";
//     }
//     matrixHTML += "</table>";
//     document.getElementById("matrix").innerHTML = matrixHTML;
// }

// function calculate() {
//     var rows = document.getElementById("rows").value;
//     var columns = document.getElementById("columns").value;
//     var matrix = [];
//     for (var i = 0; i < rows; i++) {
//         var row = [];
//         for (var j = 0; j < columns; j++) {
//             row.push(parseFloat(document.getElementById("a" + i + j).value));
//         }
//         matrix.push(row);
//     }
//     document.getElementById("result").innerHTML = "Result: ";
// }