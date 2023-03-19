// CardNumber selector
const numberCardInput = document.querySelector(".card-number-input");
const numberCard = document.querySelector(".card-number");

// cardName Selector
const nameCard = document.querySelector("#card-name");
const nameCardInput = document.querySelector(".card-name-input");

// Date selector
const monthCard = document.querySelector(".month-card");
const yearCard = document.querySelector(".year-card");
const mm = document.querySelector(".m-input");
const yy = document.querySelector(".y-input");

// CVC Selector
const cvcInput = document.querySelector(".cvc-input");
const cvcCard = document.querySelector(".cvc-card");

// card added selector
const cardAddedContainer = document.querySelector(".card-added-container");
const formContainer = document.querySelector(".form-container");
// btn selector

const btnContinue = document.querySelector(".btn-continue");
const btnConfirm = document.querySelector(".btn");

// Error selector
const error = document.querySelector("#error");
const nameError = document.querySelector("#name-error");
const mmError = document.querySelector("#mm-error");
const yyError = document.querySelector("#yy-error");
const cvcError = document.querySelector("#cvc-error");

//  Change Number card

numberCardInput.addEventListener("input", (e) => {
  // Chaging number card interactively
  let inputValue = e.target.value;
  numberCard.textContent = numberCardInput.value;

  // validando letras
  const isThereAnyLetter = /[A-z]/g;
  if (isThereAnyLetter.test(numberCardInput.value)) {
    showError(error, numberCardInput, "wrong format");
  } else {
    //añadiendo espacios cada 4 numeros y añadiendolos automaticamente
    numberCardInput.value = inputValue
      .replace(/\s/g, "")
      .replace(/([0-9]{4})/g, "$1 ")
      .trim();
    // eliminando error
    hideError(error, numberCardInput);
  }
  if (numberCardInput.value == "") {
    showError(error, numberCardInput, "can't be blank");
    numberCard.textContent = "0000 0000 0000 0000";
  }
});

// change name card
nameCardInput.addEventListener("input", () => {
  const isInputEmpty = nameCardInput.value;
  if (isInputEmpty == "") {
    showError(nameError, nameCardInput, "can't be blank");

    nameCard.textContent = "Your Name";
  } else {
    let isThereAnyNumber = /^[a-zA-Z\s]+$/;
    if (!isThereAnyNumber.test(nameCardInput.value)) {
      showError(nameError, nameCardInput, "Wrong format");
    } else {
      hideError(nameError, nameCardInput);
      nameCard.textContent = nameCardInput.value;
    }
  }
});
// changing month card

mm.addEventListener("input", (e) => {
  validateMes(mm);
});
yy.addEventListener("input", (e) => {
  validateYear(yy);
});

cvcInput.addEventListener("input", (e) => {
  const isInputEmpty = cvcInput.value;
  if (isInputEmpty == "") {
    cvcCard.textContent = "000";
    showError(cvcError, cvcInput, "can't be blank");
  } else {
    const inputValue = e.target.value;
    let isThereAnyLetter = /^\d+$/;
    // Verificar si el valor de entrada solo contiene números con regex
    if (!isThereAnyLetter.test(inputValue)) {
      showError(cvcError, cvcInput, "only numbers allowed");
    } else {
      cvcCard.textContent = inputValue;
      hideError(cvcError, cvcInput);
    }
  }
});

btnConfirm.addEventListener("click", (e) => {
  e.preventDefault();
  cardAddedContainer.classList.toggle("inactive");
  formContainer.classList.toggle("inactive");
});

btnContinue.addEventListener("click", (e) => {
  e.preventDefault();
  cardAddedContainer.classList.toggle("inactive");
  formContainer.classList.toggle("inactive");
});

function showError(parrafError, inputError, msgError) {
  parrafError.classList.add("error");
  parrafError.textContent = msgError;
  inputError.style.borderColor = "#ff5252";
}
function hideError(parrafError, inputError) {
  parrafError.classList.remove("error");
  parrafError.textContent = "";
  inputError.style.borderColor = "#0000001f";
}
function validateMes(input) {
  let valor = input.value;
  // if is empty
  if (valor === "") {
    monthCard.textContent = "00";
    showError(mmError, mm, "can't be blank");
  } //if is there are any letter
  else if (isNaN(valor)) {
    showError(mmError, mm, "wrong format");
  } //if is the month valid
  else if (valor < 1 || valor > 12) {
    showError(mmError, mm, "01/12");
  } //hide the error
  else {
    monthCard.textContent = input.value;
    hideError(mmError, mm);
  }
}
function validateYear(input) {
  let valor = input.value;
  // if is empty
  if (valor === "") {
    yearCard.textContent = "00";
    showError(yyError, yy, "can't be blank");
  } //if is there are any letter
  else if (isNaN(valor)) {
    showError(yyError, yy, "wrong format");
  } //hide the error
  else {
    yearCard.textContent = input.value;
    hideError(yyError, yy);
  }
}
