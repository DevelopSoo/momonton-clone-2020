const clockContainer = document.querySelector(".js-clock"),
  // div의 클래스(.js-clock)를 불러낸다.
  clockTitle = clockContainer.querySelector("h1");
//h1을 불러낸다.

function getTime() {
  //시간을 얻는 함수를 만든다.
  const date = new Date();
  //Date()라는 내장 함수를 불러낸다. 이때 불러낸 함수는 변수로 저장?한다.
  const hours = date.getHours();
  //날짜 함수의 변수 date를 이용하여 getHours() 함수를 불러낸다.
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  //h1에 해당하는 clockTitle의 문장을 바꿀 때 innerText를 이용하여 바꾼다.
  /*이때 변수와 문자열 등을 한꺼번에 적기 위해, 즉 콤마를 쓰지 않기 위해 
  `(백틱)을 사용한다. 백틱 안에 백틱도 가능하다. 
  */
}

function init() {
  //마지막으로 한꺼번에 불러내는 함수인듯.
  getTime();
  setInterval(getTime, 1000);
  //왼쪽 인자가 함수, 오른쪽 인자가 시간. 함수가 반복되는 시간을 의미한다.
}

init();
