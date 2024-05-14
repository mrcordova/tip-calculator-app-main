const billInput = document.getElementById("bill");
const tipRadioBtns = document.querySelectorAll('.tips-con>div');
const customTipInput = document.getElementById('custom');

let bill = 0;
let tipPercentage = 0.0;

const addTipPercentage = (e) => {
    e.preventDefault()
    tipPercentage = e.currentTarget.children[0].value;
    console.log(tipPercentage);
}

const converToPercentage = (num) => (num / 100);

// console.log(tipRadioBtns);

billInput.addEventListener("input", (e) => {
    // console.log("input changed", e.currentTarget.value);
    bill = e.currentTarget.value;
})

for (tipRadioBtn of tipRadioBtns) {
    tipRadioBtn.addEventListener("click", addTipPercentage);
}

customTipInput.addEventListener("input", (e) => {
    tipPercentage = converToPercentage(e.currentTarget.value);
    console.log(tipPercentage);
});