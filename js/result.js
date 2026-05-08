import { results, mbtis } from "../data/data.js";

// 쿼리스트링을 가져와서 변수에 저장
const mbti = new URLSearchParams(location.search).get("mbti");

// 클래스 접근자 중 문자열로 접근하기 위해 [] 사용
const result = results[mbtis[mbti]];

// 변경할 태그를 읽어서 변수에 할당
const titleElement = document.querySelector(".page_title");
const characterElement = document.querySelector(".character");
const boxElements = document.querySelectorAll(".box");
const jobElements = document.querySelectorAll(".job");
const lectureUrlElement = document.querySelector(".lecture");
const lectureImgElement = document.querySelector(".lecture img");

// 제목 수정
titleElement.innerHTML = result.title;

// 캐릭터 수정
characterElement.src = result.character;

// results 결과 4개 짜리
boxElements.forEach((box, index) => {
  box.innerHTML = result.results[index];
});

// 추천 직업 여러 개 읽어서 한꺼번에 forEach()
jobElements.forEach((job, index) => {
  job.innerHTML = result.jobs[index];
});

// 강의 URL 수정
lectureUrlElement.href = result.lectureUrl;

// 강의 이미지 수정
lectureImgElement.src = result.lectureImg;
