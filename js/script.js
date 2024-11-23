const RussianLowercaseCharsBtn = document.getElementById("RussianLowercaseCharsBtn");
const RussianUppercaseCharsBtn = document.getElementById("RussianUppercaseCharsBtn");
const numberCharsBtn = document.getElementById("numberCharsBtn");
const symbolCharsBtn = document.getElementById("symbolCharsBtn");
const EnglishLowercaseCharsBtn = document.getElementById("EnglishLowercaseCharsBtn");
const EnglishUppercaseCharsBtn = document.getElementById("EnglishUppercaseCharsBtn");
const customSymbolsInput = document.getElementById("customSymbolsInput");
const myBtn = document.getElementById("myBtn");
const myPassword = document.getElementById("myPassword");

myBtn.onclick = function(){
    const length = 10; // Задаем длину пароля по умолчанию
    const includeRussianLowercase = RussianLowercaseCharsBtn.checked;
    const includeRussianUppercase = RussianUppercaseCharsBtn.checked;
    const includeEnglishLowercase = EnglishLowercaseCharsBtn.checked;
    const includeEnglishUppercase = EnglishUppercaseCharsBtn.checked;
    const includeNumbers = numberCharsBtn.checked;
    const includeSymbols = symbolCharsBtn.checked;
    const customSymbols = customSymbolsInput.value.toString();

    generatePassword(length, includeRussianLowercase, includeRussianUppercase, includeEnglishLowercase, includeEnglishUppercase, includeNumbers, includeSymbols, customSymbols);
}

function generatePassword(length, includeRussianLowercase, includeRussianUppercase,includeEnglishLowercase,includeEnglishUppercase, includeNumbers, includeSymbols, customSymbols){

    const RussianLowercaseChars = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    const RussianUppercaseChars = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=";
    const EnglishLowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const EnglishUppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        if (!includeRussianLowercase && !includeRussianUppercase && !includeEnglishLowercase && !includeEnglishUppercase && !includeNumbers && !includeSymbols && customSymbols === "") {
        myPassword.textContent = "Выберите символы";
        return;
    }




    let allowedChars = "";
    let password = "";

    allowedChars += includeRussianLowercase ? RussianLowercaseChars : "";
    allowedChars += includeRussianUppercase ? RussianUppercaseChars : "";
    allowedChars += includeEnglishUppercase ? EnglishUppercaseChars : "";
    allowedChars += includeEnglishLowercase ? EnglishLowercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    allowedChars += customSymbols;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    myPassword.textContent = password;
}
