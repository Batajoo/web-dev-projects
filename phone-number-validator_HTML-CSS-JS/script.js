const phoneNumber = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const validateNumber = (number) => {
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
    return phoneRegex.test(number);
}
const checkPhoneNumber = () => {
    const phoneNumberValue = phoneNumber.value;
    if (!phoneNumberValue){
        alert("Please provide a phone number");
        return;
    }
    const isValidPhoneNumber = validateNumber(phoneNumberValue);
    if(isValidPhoneNumber){
        results.innerHTML = `
            <div class="valid-num result-box"><i class="fas fa-check-circle"></i><span>Valid US number: ${phoneNumberValue}</span></div>
        ` + results.innerHTML;
    } else {
        results.innerHTML = `
            <div class="invalid-num result-box"><i class="fas fa-times-circle"></i><span>Invalid US number: ${phoneNumberValue}</span></div>
        ` + results.innerHTML;
    }
};


const clearButtonFunction = () => {
    results.innerHTML = "";
    phoneNumber.value = "";
};

checkButton.addEventListener("click", checkPhoneNumber)
clearButton.addEventListener("click", clearButtonFunction)