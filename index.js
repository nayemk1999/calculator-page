// document.getElementById("digit-container").addEventListener("click", function (even) {
//     const typed = even.target.innerText;
//     const input = document.getElementById("inputType");
//     const inputValue = input.innerText + typed;
//     inputShow(typed, inputValue);
// })
// function inputShow(typed, inputResult) {
//     if (isNaN(typed)) {
//         if (typed === "+") {
//             document.getElementById("inputType").innerText = inputResult;
//         }
//         else if (typed === "-") {
//             document.getElementById("inputType").innerText = inputResult;
//         }
//         else if (typed === "*") {
//             document.getElementById("inputType").innerText = inputResult;
//         }
//         else if (typed === "/") {
//             document.getElementById("inputType").innerText = inputResult;
//         }
//         else if (typed === "C") {
//             document.getElementById("inputType").innerText = "";
//         }
//         else if (typed === "=") {
//             console.log("hllo");
//             calculateTotal();
//         }

//     }
//     else {
//         document.getElementById("inputType").innerText = inputResult;
//     }

// }
// function calculateTotal() {
//     const totalValue = document.getElementById("inputType").innerText;
//     const totalValueNum = totalValue.split("", totalValue.innerText);
//     const postion0 = parseFloat(totalValueNum[0]);
//     const postion1 = parseFloat(totalValueNum[1]);
//     const postion2 = parseFloat(totalValueNum[2]);

// }
