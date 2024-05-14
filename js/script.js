const billInput = document.getElementById("bill");
const tipRadioBtns = document.querySelectorAll('.tips-con>div');
const customTipInput = document.getElementById('custom');
const peopleInput = document.getElementById('people');
const resetBtn = document.getElementById('resetBtn');

const totalTipAmount = document.getElementById('totalTipAmount');
const totalAmount = document.getElementById('totalAmount');

let bill = 0;
let tipPercentage = 0.0;
let numOfPeople = 0;


const addTipPercentage = (e) => {
    e.preventDefault()
    changeResetBtnState(false);
    tipPercentage = e.currentTarget.children[0].value;
    updateTotals();
    
}

const converToPercentage = (num) => (num / 100);

const changeResetBtnState = (val) => resetBtn.disabled = val;

const checkNumOfPeople = () => {
        const peopleLab = document.querySelector('label[for=people]>span');

     if (numOfPeople == 0 && peopleLab.classList.contains('hide') ) {
        peopleLab.classList.remove('hide');
        peopleInput.classList.add('invalid');
        
        changeResetBtnState(true);
    } else if (numOfPeople !== 0) {
        changeResetBtnState(false);
        peopleLab.classList.add('hide');
        peopleInput.classList.remove('invalid');
        updateTotals();
    }
}

const updateTotals = () => {

    if (!numOfPeople == 0) {
        const tipPerPerson = (tipPercentage * bill) / numOfPeople;
        totalTipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
        totalAmount.textContent = `$${((bill / numOfPeople) + tipPerPerson).toFixed(2)}`;
    } else {
        checkNumOfPeople();
    }
}


billInput.addEventListener("input", (e) => {
    changeResetBtnState(false);
    bill = e.currentTarget.value;
    updateTotals();
})

for (const tipRadioBtn of tipRadioBtns) {
    tipRadioBtn.addEventListener("click", addTipPercentage);
}

customTipInput.addEventListener("input", (e) => {
   
    tipPercentage = converToPercentage(e.currentTarget.value);
    
    updateTotals();
    
});

peopleInput.addEventListener("input", (e) => {
  
    numOfPeople = e.currentTarget.value === "" ? 0 : Math.floor(e.currentTarget.value);
    checkNumOfPeople();
    updateTotals();
   
})

resetBtn.addEventListener("click", (e) => {
    // const checkedRadioBtn = document.querySelector('input[type=radio]:checked');
    billInput.value = 0;
    bill = 0;
    customTipInput.value = 0.0;
    tipPercentage = 0.0;
    peopleInput.value = 0;
    numOfPeople = 0;
    totalAmount.textContent = '$0.00';
    totalTipAmount.textContent = '$0.00';

})