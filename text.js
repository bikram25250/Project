function calculate() {
let n500 = parseInt(document.getElementById("n500").value) || 0;
let n200 = parseInt(document.getElementById("n200").value) || 0;
let n100 = parseInt(document.getElementById("n100").value) || 0;
let n50 = parseInt(document.getElementById("n50").value) || 0;
let n20 = parseInt(document.getElementById("n20").value) || 0;
let n10 = parseInt(document.getElementById("n10").value) || 0;

  let total = (500*n500) + (200*n200) + (100*n100) + (50*n50) + (20*n20) + (10*n10);

  document.getElementById("result").innerText = "Total Amount = ₹" + total + " /-";
}
