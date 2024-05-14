const billInput = document.getElementById("bill");
const tipRadioBtns = document.querySelectorAll('.tips-con>div');
const customTipInput = document.getElementById('custom');
const peopleInput = document.getElementById('people');
const resetBtn = document.getElementById('resetBtn');

let bill = 0;
let tipPercentage = 0.0;
let numOfPeople = 0;


const addTipPercentage = (e) => {
    e.preventDefault()
    changeResetBtnState(false);
    tipPercentage = e.currentTarget.children[0].value;
    console.log(tipPercentage);
}

const converToPercentage = (num) => (num / 100);

const changeResetBtnState = (val) => resetBtn.disabled = val;


billInput.addEventListener("input", (e) => {
    changeResetBtnState(false);
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
  
    numOfPeople = e.currentTarget.value === "" ? 0 : Math.floor(e.currentTarget.value);
    if (numOfPeople == 0 && peopleLab.classList.contains('hide') ) {
        peopleLab.classList.remove('hide');
        peopleInput.classList.add('invalid');
        changeResetBtnState(true);
    } else if (numOfPeople !== 0) {
        changeResetBtnState(false);
        peopleLab.classList.add('hide');
        peopleInput.classList.remove('invalid');
    }
    console.log(numOfPeople);
})