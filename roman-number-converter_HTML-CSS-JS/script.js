const inputBox = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const outputBox = document.getElementById("output")

const romanNumerals = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" }
];

const convertPressed = (e) =>{
  if (inputBox.value === "") {
    outputBox.classList.add("empty-input");
    outputBox.textContent = "Please enter a valid number";
    return;
  } 
  else if (parseInt(inputBox.value) < 0){
    outputBox.classList.add("empty-input");
    outputBox.textContent = "Please enter a number greater than or equal to 1";
    return;
  }
  else if (parseInt(inputBox.value) >= 4000){
    outputBox.classList.add("empty-input");
    outputBox.textContent = "Please enter a number less than or equal to 3999";
    return;
  }
  else {
    outputBox.classList.remove("empty-input");
    outputBox.textContent = "";
  }

  let inputNumberInt = parseInt(inputBox.value);

  for(const {value, numeral} of romanNumerals){
    while(inputNumberInt >= value) {
      outputBox.textContent += numeral;
      inputNumberInt -= value;
    }

  }
};

convertButton.addEventListener("click", convertPressed);
inputBox.addEventListener("keypress", (e)=>{
  if(e.key === "Enter"){
    convertPressed();
  }
})

