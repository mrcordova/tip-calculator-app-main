const billInput = document.getElementById("bill");

billInput.addEventListener("input", (e) => {
    console.log("input changed", e.currentTarget.value);
})