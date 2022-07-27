const A = document.querySelector(".A");
const B = document.querySelector(".B");
const C = document.querySelector(".C");
const randomScore = () => {
  return Math.floor(Math.random() * 10);
};

function caculation(a, b, c) {
  return (a * 0.6 + b * 0.3 + c * 0.1).toFixed(1);
}

function getGrade(score) {
  if (score >= 5) {
    return "Đỗ";
  } else {
    return "Trượt";
  }
}

function run() {
  A.querySelector("td.score-a").innerHTML = randomScore();
  A.querySelector("td.score-b").innerHTML = randomScore();
  A.querySelector("td.score-c").innerHTML = randomScore();
  A.querySelector("td.score-dghp").innerHTML = caculation(
    A.querySelector("td.score-a").innerHTML,
    A.querySelector("td.score-b").innerHTML,
    A.querySelector("td.score-c").innerHTML
  );
  A.querySelector("td:last-child").innerHTML = getGrade(
    A.querySelector("td.score-dghp").innerHTML
  );
  B.querySelector("td.score-a").innerHTML = randomScore();
  B.querySelector("td.score-b").innerHTML = randomScore();
  B.querySelector("td.score-c").innerHTML = randomScore();
  B.querySelector("td.score-dghp").innerHTML = caculation(
    B.querySelector("td.score-a").innerHTML,
    B.querySelector("td.score-b").innerHTML,
    B.querySelector("td.score-c").innerHTML
  );
  B.querySelector("td:last-child").innerHTML = getGrade(
    B.querySelector("td.score-dghp").innerHTML
  );
  C.querySelector("td.score-a").innerHTML = randomScore();
  C.querySelector("td.score-b").innerHTML = randomScore();
  C.querySelector("td.score-c").innerHTML = randomScore();
  C.querySelector("td.score-dghp").innerHTML = caculation(
    C.querySelector("td.score-a").innerHTML,
    C.querySelector("td.score-b").innerHTML,
    C.querySelector("td.score-c").innerHTML
  );
  C.querySelector("td:last-child").innerHTML = getGrade(
    C.querySelector("td.score-dghp").innerHTML
  );
}
run();
