const billInput = document.getElementById("bill");
const tipRadioBtns = document.querySelectorAll('.tips-con>div');
const customTipInput = document.getElementById('custom');
const peopleInput = document.getElementById('people');

let bill = 0;
let tipPercentage = 0.0;
let numOfPeople = 0;

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

peopleInput.addEventListener("input", (e) => {
    const peopleLab = document.querySelector('label[for=people]>span');
    // if (!e.currentTarget.validality) {
    //     peopleLab.classList.remove('hide');
    // } else {
    //     peopleLab.classList.add('hide');
    // }
    numOfPeople = e.currentTarget.value === "" ? 0 : Math.floor(e.currentTarget.value);
    if (numOfPeople == 0 && peopleLab.classList.contains('hide') ) {
        peopleLab.classList.remove('hide');
        peopleInput.classList.add('invalid');
    } else if (numOfPeople !== 0) {
        peopleLab.classList.add('hide');
        peopleInput.classList.remove('invalid');
    }
    console.log(numOfPeople);
})