let providedWord = '슭곰발';
let inputWord = '';
let formGroup = document.querySelector('.form-group');
let input = document.querySelector('#input');

let inputBtn = document.querySelector('#inputBtn');
let inputBox = document.querySelector('.input-box');
let warningBox = document.querySelector('#message-box');
let wordHistory = document.querySelector('#word-history');

var onlyKorean = function () {
  var pattern = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
  this.value = this.value.replace(pattern, '');
};

wordHistory.textContent = providedWord;
input.focus();
input.addEventListener('keypress', onlyKorean);

formGroup.addEventListener('submit', (event) => {
  event.preventDefault();
  warningBox.textContent = '';
  inputWord = input.value;
  console.log('inputWord', inputWord, typeof inputWord);

  let firstCharOfInputWord = inputWord[0];

  let lastCharOfProvidedWord = providedWord[providedWord.length - 1];

  if (inputWord.length < 3) {
    inputBox.textContent = inputWord;
    inputWord = '';
    warningBox.textContent = `세글자 단어를 입력하세요.`;
  } else if (lastCharOfProvidedWord === firstCharOfInputWord) {
    inputBox.textContent = inputWord;
    providedWord = inputWord;
    wordHistory.textContent += ` - ${inputWord}`;
    inputWord = '';
  } else {
    inputBox.textContent = inputWord;
    inputWord = '';
    warningBox.textContent = `"${lastCharOfProvidedWord}"로 시작하는 단어를 입력하세요.`;
  }
  input.value = '';
  input.focus();
});
