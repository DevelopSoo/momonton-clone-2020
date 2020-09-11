/*
목적
  - 화면에 이름을 물어보는 창을 띄우고, 이름을 작성하면 이름을 포함한 인사를 하게 한다.

1. 화면에 창을 띄운다. -> html의 form과 input을 생성한다.
2. 이름을 작성하고 제출하면 저장이 된다 -> localStorage에 setItem 실행
3. 이름을 제출하면 form이 사라진다. -> CSS의 class 제거
4. 이름을 제출하면 h4가 생성된다. -> CSS의 class 생성
5. 저장되어 있는지 아닌지에 따라 질문을 할지 이름을 보여줄지 결정한다. 
*/

const jsForm = document.querySelector(".js-form"),
  jsInput = jsForm.querySelector("input"),
  jsGreeting = document.querySelector(".js-greetings");
const KEY_USER = "currentUser";

function saveName(text) {
  localStorage.setItem(KEY_USER, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const VALUE_USER = jsInput.value;
  saveName(VALUE_USER);
  paintGreeting(VALUE_USER);
}

function askForName() {
  jsForm.classList.add("showing");
  addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  jsForm.classList.remove("showing");
  jsGreeting.classList.add("showing");
  jsGreeting.innerText = `Hello ${text}`;
}

function loadName() {
  const savedName = localStorage.getItem(KEY_USER);
  if (savedName === null) {
    askForName();
  } else {
    paintGreeting(savedName);
  }
}
function init() {
  loadName();
}

init();
