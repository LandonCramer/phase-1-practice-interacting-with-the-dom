const timer = document.querySelector("#counter");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const like = document.querySelector("#heart");
const pause = document.querySelector("#pause");
const commentsList = document.querySelector(".comments");
const commentInput = document.querySelector('#comment-input')
const commentForm = document.querySelector('#comment-form')

let count = 0;
let isPaused = false;

document.addEventListener("DOMContentLoaded", () => {
  setInterval(function () {
    if(!isPaused) {
    count += 1;
    timer.textContent = count;
    }
  }, 1000);
});

function updateTimer() {
  timer.textContent = count;
}

minus.addEventListener("click", () => {
  if (!isPaused) {
    count--;
    updateTimer();
  }
});

plus.addEventListener("click", () => {
  if (!isPaused) {
    count++;
    updateTimer();
  }
});

like.addEventListener("click", () => {
  isPaused = !isPaused;
  if (!isPaused) {
    const comment = document.createElement("li");
    comment.textContent = `Liked ${count}`;
    commentsList.appendChild(comment);
  }
});

pause.addEventListener("click", () => {
  isPaused = !isPaused;
  pause.textContent = isPaused
    ? "Resume"
    : "Pause";[minus, plus, like].forEach((button) => {
        button.disabled = isPaused;
      });
});

commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const commentText = commentInput.value
    if(commentText) {
        const comment = document.createElement('li')
        comment.textContent = commentText
        commentsList.appendChild(comment)
        commentInput.value = ""
    }
})