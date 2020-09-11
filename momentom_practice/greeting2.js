const form = document.querySelector(".js-form"),
  //js-form의 경우 class이기 때문에 .(닷) 표시를 잊지말자!!
  input = form.querySelector("input"),
  //그냥 input에 class넣어서 해도 상관없음
  greetings = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
//이해안됨. 왜 이렇게 하는거지???
//USER_LS는 key 값(localStorage에서 왼쪽)
//value는 내가 form에 작성할 값이겠지

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  //왜 이름을 불러야 하는거야??? 이름을 불러서 뭐하려고???
  //여기서 "currentUser"를 굳이 변수로 만든 이유는 사용자가 무엇인지 알게 하기 위함이다!!
  //
}

function init() {
  loadName();
}
//함수를 잘게 쪼개는 것이 좋다. 그래야 나중에 읽을 때 좋다

init();
