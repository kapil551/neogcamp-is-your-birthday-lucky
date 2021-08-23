console.log("Hello from JavaScript");

//get the birthDayDate of date input
const dateOfBirth = document.querySelector("#date-of-birth");
console.log(dateOfBirth);

// get the lucky number input
const luckyNumber = document.querySelector("#lucky-number");
console.log(luckyNumber);

// get the check lucky button
const checkLuckButton = document.querySelector("#check-number");
console.log(checkLuckButton);

// get the text area 
const outputTextArea = document.querySelector("#text-area");
console.log(outputTextArea);

// get the error message div
const errorMessage = document.querySelector(".error-message");
console.log(errorMessage);


// check whether the birthday is lucky or not by taking modulus with lucky number
function checkBirthdayIsLucky(sum , lucky)
{
    
    if(sum % lucky === 0) {

        console.log("your birthday is lucky");
        outputTextArea.innerText = "your birthday is lucky 🥳";
    }
    else {
        console.log("your birthday is NOT lucky");
        outputTextArea.innerText = "your birthday is NOT lucky 😥";
    }
}

// calculate the sumBdayDigits of digits of the birthDayDate of birth
function calculateSumBdayDigits(birthDayDate) {
    
    console.log("birthDayDate:", birthDayDate);
    
    // birthDayDate = "2012-12-01";
    // Firstly remove all the special characters from the birthDayDate of birth.
    // How to do that ? replaceAll() ==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
    // i.e convert "2012-12-01" to "20121201"

    console.log(`replace all '-' in birthDayDate with '$'`, birthDayDate.replaceAll("-", "$"));
    console.log(`replace all '-' in birthDayDate with '' `, birthDayDate.replaceAll("-", ""));
    
    const modifiedBirthDayDate =  birthDayDate.replaceAll("-", "");
    console.log(modifiedBirthDayDate);


    // Now how to traverse a string in javascript?
    // Using charAt() ==> Inbuilt function of strings

    // Additional Read:
    // for....of - JavaScript : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    // for...in - JavaScript : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

    let sumDigits = 0;
    for(let idx = 0; idx < modifiedBirthDayDate.length; idx++) {

        console.log(modifiedBirthDayDate.charAt(idx));

        // Now how to add the sumBdayDigits ==> Do typecasting convert the character to number
        // TypeCasting In JavaScript
        sumDigits = sumDigits + Number(modifiedBirthDayDate.charAt(idx));

    }

    console.log("sumBdayDigits" , sumDigits);

    return sumDigits;

}

// event handle for click on the check lucky button
function checkLuckButtonHandler() {

    // Resetting For Next Set of Input Values By the User.
    errorMessage.style.display = "none"; // make the display property of
    outputTextArea.innerText = "";

    console.log("Clicked");
    console.log("Date of Birth:", dateOfBirth.value);
    console.log("Lucky Number:", luckyNumber.value);

    // lucky number validation ==> adding validation
    if(luckyNumber.value > 0) {

        const birthDayDate = dateOfBirth.value;

        // validation for date of birth
        if(birthDayDate != "") {

            // Now how to get the digits of the Date of Birth?
            // First thing to remember is that the birthDayDate of birth is a string by default.
            console.log(typeof(birthDayDate));
            console.log(typeof(luckyNumber.value));
        
            // calulate the sumBdayDigits of digits of birthDayDate of birth
            const sumBdayDigits = calculateSumBdayDigits(birthDayDate);
            console.log("sumBdayDigits:", sumBdayDigits);
        
            checkBirthdayIsLucky(sumBdayDigits, luckyNumber.value);

        } 
        
        else {

            errorMessage.style.display = "block";
            errorMessage.innerText = "Date of Birth can't be empty!!"
        }
    
        

    } 
    
    else {

        errorMessage.style.display = "block";
        errorMessage.innerText = "Lucky number should be atleast greater than zero!!";
    }

   
}


// add click event listener to the check for luck buttton
checkLuckButton.addEventListener("click", checkLuckButtonHandler);