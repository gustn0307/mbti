import { questions } from "../data/data.js";

// 사용할 태그를 변수에 지정
const progressValueEl = document.querySelector(".progress .value"); // progress의 value
const numberEl = document.querySelector(".number");
const questionEl = document.querySelector(".question");
const choice1El = document.querySelector(".choice1");
const choice2El = document.querySelector(".choice2");

// EventListener를 2개 붙인다.
choice1El.addEventListener("click", function () {
  nextQuestion(0);
});
choice2El.addEventListener("click", function () {
  nextQuestion(1);
});

// 현재의 질문 번호를 나타내는 변수
let currentNumber = 0;

// 질문 선택 결과 mbti를 저장할 변수
let mbti = "";

// 질문을 클릭하면 결과를 변수에 저장하고
// currentNumber를 1 증가시킨다.
// nextQuestion(누른 질문 색인)
function nextQuestion(choiceNumber) {
  if (currentNumber < questions.length - 1) {
    mbti += questions[currentNumber].choices[choiceNumber].value;
    console.log(mbti);
    currentNumber++;
    renderQuestion(); // 다음 문제 그려주기
  } else {
    // 마지막 질문이면 결과 페이지로 이동시킨다.
    showResultPage();
    return;
  }
}

function showResultPage() {
  // mbti 쿼리 스트링을 만들어서 result.html에 전송
  console.log("fdjlsajhfldsajlf")
  location.href = `../result.html?mbti=${mbti}`;
}

function renderQuestion() {
  progressValueEl.style.width = (currentNumber + 1) * 10 + "%";

  const question = questions[currentNumber];
  numberEl.innerHTML = question.number;
  questionEl.innerHTML = question.question;
  choice1El.innerHTML = question.choices[0].text;
  choice2El.innerHTML = question.choices[1].text;
}

// 렌더 함수 호출
renderQuestion();
