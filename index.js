let count = 0;

const countSpan = document.getElementById("count");


function increment() {
  count++;
  countSpan.textContent = count;
}

function decrement() {
  if (count > 0) {
    count--;
    countSpan.textContent = count;
  }
}