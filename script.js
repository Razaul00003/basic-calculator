var display = document.getElementById("display");

document.getElementById("1").addEventListener("click", function () {
  addDigit(1);
});
document.getElementById("2").addEventListener("click", function () {
  addDigit(2);
});
document.getElementById("3").addEventListener("click", function () {
  addDigit(3);
});
document.getElementById("4").addEventListener("click", function () {
  addDigit(4);
});
document.getElementById("5").addEventListener("click", function () {
  addDigit(5);
});
document.getElementById("6").addEventListener("click", function () {
  addDigit(6);
});
document.getElementById("7").addEventListener("click", function () {
  addDigit(7);
});
document.getElementById("8").addEventListener("click", function () {
  addDigit(8);
});
document.getElementById("9").addEventListener("click", function () {
  addDigit(9);
});
document.getElementById("0").addEventListener("click", function () {
  addDigit(0);
});
document.getElementById("11").addEventListener("click", function () {
  addOperator(11);
});
document.getElementById("12").addEventListener("click", function () {
  addOperator(12);
});
document.getElementById("13").addEventListener("click", function () {
  addOperator(13);
});
document.getElementById("14").addEventListener("click", function () {
  addOperator(14);
});
document.getElementById("15").addEventListener("click", function () {
  addOperator(15);
});
document.getElementById("16").addEventListener("click", function () {
  var operatorKey = document.getElementById("16").innerText;
  var getValueDisplay = display.innerText;
  var solution = eval(getValueDisplay);
  display.innerText = solution;
});
//fucntion on digit key press
function addDigit(Id) {
  var digitkey = Id;
  var digitId = document.getElementById(digitkey).innerText;
  var digitIdValue = parseFloat(digitId);
  display.innerText = display.innerText + digitIdValue;
}
//operator add function
function addOperator(id) {
  var operatorKey = document.getElementById(id).innerText;
  display.innerText = display.innerText + operatorKey;
}
