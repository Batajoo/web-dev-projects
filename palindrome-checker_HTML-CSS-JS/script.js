
const inputBox = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.querySelector('#result p');

function checkPalindrome(){
  const inputWord = inputBox.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();;
  const wordLength = inputWord.length;
  console.log(inputWord);
  for(let i=0; i<wordLength; i++){
    if(inputWord[i] !== inputWord[wordLength-i-1]){
      return false;
    }
  }
  return true;
}

function displayResult(finalResult){
  if(inputBox.value === ""){
    alert("Please input a value");
  }
  else if(finalResult){
    result.innerText = `${inputBox.value} is a palindrome.`;
    result.style.color = "green";
  } else {
    result.innerText = `${inputBox.value} is not a palindrome.`;
    result.style.color = "red";
  }

}

function performChecking(){
  const performedResult = checkPalindrome();
  displayResult(performedResult);
}


button.addEventListener("click", performChecking)