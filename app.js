// RETURN ANSWERS TO QUESTION
const submit = document.querySelector(".btn");
const answerBox = document.querySelector("#block");
const output = document.querySelector(".answerBox");
const display = s => output.innerText = s;

answers =[
    'yes', 
    'no', 
    'well', 
    'no.. no. for sure'
];

const delayLoop = (fn, delay) => {
    return (answer, i) => {
        setTimeout(() => {
          display(answer);
        }, i * 1000);
  };
};

submit.addEventListener("click", () => {
    answers.forEach(delayLoop(display, 1000));
    answerBox.style.display = "block";
      });


// HOVER HEART FOR QUOTE

const heart = document.querySelector(".heart");
const quoteBox = document.querySelector("#doggo");

heart.addEventListener("mouseenter", () => {
    quoteBox.style.display = "block";
});

heart.addEventListener("mouseleave", () => {
  quoteBox.style.display = "none";
});

// TOUCH HEART

heart.addEventListener("touchstart", () => {
  quoteBox.style.display = "block";
});

heart.addEventListener("touchend", () => {
quoteBox.style.display = "none";
});