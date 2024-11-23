const langSec = document.querySelector('#languageSelection');
const buttons = documnet.querySelectorAll('a');

const data = {
    "russian":
    {
        "title": "генератор паролей",
        "myH2": "Создай свой пароль!",
        "lowerRU": "С русскими строчными",
        "upperRu": "С русскими заглавными",
        "numbers": "С цифрами",
        "symbols": "С символами",
        "lowerEN": "С английскими строчными",
        "upperEn": "С английскими заглавными",
        "password": "твой пароль:",
        "myBtn": "СОЗДАТЬ!",
        "author": "АВТОР: ОЛЕГ ПЕРЕВАЛОВ"
    },
    "english":
    {
        "title": "genarator password",
        "myH2": "Create your password!",
        "lowerRU": "With Russian lowercase",
        "upperRu": "With Russian uppercase  ",
        "numbers": "With numbers",
        "symbols": "With symbols",
        "lowerEN": "With English lowercase",
        "upperEn": "With English uppercase",
        "password": "your password:",
        "myBtn": "CREATE!",
        "author": "AUTHOR: OLEG PEREVALOV"
    }
}

buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const lang = e.target.id;

    setLanguage(lang);
  });
});

setLanguage("russian"); // Установите начальный язык на русский

const setLanguage = (lang) => {
  document.title = data[lang].title;
  document.querySelector('h1.title').textContent = data[lang].title;
  document.querySelector('h2.myH2').textContent = data[lang].myH2;
  document.querySelector('label.lowerRU').textContent = data[lang].lowerRU;
  document.querySelector('label.upperRu').textContent = data[lang].upperRu;
  document.querySelector('label.numbers').textContent = data[lang].numbers;
  document.querySelector('label.symbols').textContent = data[lang].symbols;
  document.querySelector('label.lowerEN').textContent = data[lang].lowerEN;
  document.querySelector('label.upperEn').textContent = data[lang].upperEn;
  document.querySelector('h2.password').textContent = data[lang].password;
  document.querySelector('button#myBtn').textContent = data[lang].myBtn;
  document.querySelector('h2.author').textContent = data[lang].author;

};

