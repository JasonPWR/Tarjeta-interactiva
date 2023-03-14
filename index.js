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

// Error selector
const error = document.querySelector("#error");

//  Change Number card
numberCardInput.addEventListener("input", (e) => {
    // Chaging number card interactively
    let inputValue = e.target.value;
    numberCard.textContent = numberCardInput.value;
    
    // validando letras
    const isThereAnyLetter = /[A-z]/g;
    if(isThereAnyLetter.test(numberCardInput.value)){

        showError(error,numberCardInput,"ala bestia")
    }
    else{  //añadiendo espacios cada 4 numeros y añadiendolos automaticamente
        numberCardInput.value = inputValue.replace(/\s/g, "").replace(/([0-9]{4})/g,"$1 ").trim();
        // eliminando error
        hideError(error,numberCardInput);

    }
    if(numberCardInput.value == ""){
        numberCard.textContent = "0000 0000 0000 0000"; 
    }
});

// change name card
nameCardInput.addEventListener("input", () => {
    const isInputEmpty = nameCardInput.value;
    if(isInputEmpty == ''){
        nameCard.textContent = "Your Name";
    }else{
        nameCard.textContent = nameCardInput.value;
    }

});

mm.addEventListener("input", (e) => {
    const inputValue = e.target.value;

    monthCard.textContent = inputValue;
});
yy.addEventListener("input", (e) => {
    const inputValue = e.target.value;

    yearCard.textContent = inputValue;
});

cvcInput.addEventListener("input", (e) => {
    const inputValue = e.target.value;

    cvcCard.textContent = inputValue;
});

function showError(parrafError,inputError,msgError){
    parrafError.classList.add("error");
    parrafError.textContent = msgError;
    inputError.style.borderColor = "#ff5252"
    
}
function hideError(parrafError,inputError){
    parrafError.classList.remove("error");
    parrafError.textContent = "";
    inputError.style.borderColor = "#0000001f"
}