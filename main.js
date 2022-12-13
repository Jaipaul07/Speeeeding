let calcBtn = document.getElementById("calc-btn");
let sumOut = document.getElementById("sum-out");

calcBtn.addEventListener("click, calcSum");

function calcSum() {
    // let total = 0;
    // for (let n = 1; n <= 5; n++) {
       // total = total + n;
// }
let total = 1000 * 1001 / 2;
sumOut.innerHTML = total;
}
