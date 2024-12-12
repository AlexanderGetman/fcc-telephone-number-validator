const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const alertUser = () => alert("Please provide a phone number");

clearBtn.addEventListener("click", () => result.innerHTML = "");

const regex = /^1?[\s]?([\d]{3}|\([\d]{3}\))[\s\-]*[\d]{3}[\s\-]?[\d]{4}$/;

const validate = () => {
    const value = userInput.value;
    if(!value) {
        alertUser();
    } else if (value.match(regex)) {
        result.innerText = `Valid US number: ${value}`;
    } else {
        result.innerText = `Invalid US number: ${value}`;
    }
}

checkBtn.addEventListener("click", validate);