const cardNumberInput = document.querySelector(".card-number-input");
const cardNumber = document.querySelector(".card-number");
const cardName = document.querySelector(".card-name");
const cardNameInput = document.querySelector(".card-name-input");
const monthCard = document.querySelector(".month-card");
const yearCard = document.querySelector(".year-card");
const mm = document.querySelector(".m-input");
const yy = document.querySelector(".y-input");
const cvcInput = document.querySelector(".cvc-input");
const cvcCard = document.querySelector(".cvc-card");


cardNumberInput.addEventListener("keyup", (e) => {
    let cardN = e.target.value.match(/.{1,4}/gi);
    // carN create a array
        cardNumber.textContent = cardN.join(" ");
})

cardNameInput.addEventListener("keyup", (e) => {
    cardName.textContent = e.target.value;
    
})

mm.addEventListener("keyup", (e) => {
    monthCard.textContent = e.target.value;
})
yy.addEventListener("keyup", (e) => {
    yearCard.textContent = e.target.value;
})

cvcInput.addEventListener("keyup", (e) => {
    cvcCard.textContent = e.target.value;
});
// const setDateCard = (mm,yy) => {

// }