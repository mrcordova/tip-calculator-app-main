const billInput = document.getElementById("bill");
const tipRadioBtns = document.querySelectorAll('.tips-con>div');
let bill = 0;
let tipPercentage = 0.0;

// console.log(tipRadioBtns);

billInput.addEventListener("input", (e) => {
    // console.log("input changed", e.currentTarget.value);
    bill = e.currentTarget.value;
})


const addTipPercentage = (e) => {
    e.preventDefault()
    tipPercentage = e.currentTarget.children[0].value;
    console.log(tipPercentage);
}
for (tipRadioBtn of tipRadioBtns) {
    tipRadioBtn.addEventListener("click", addTipPercentage);
}