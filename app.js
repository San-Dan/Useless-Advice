// RETURN ANSWERS TO QUESTION
const submit = document.querySelector(".btn");
const output = document.querySelector(".answers");
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
      });


// HOVER HEART 

const heart = document.querySelector(".heart");
// const minFunction...

heart.addEventListener("mouseover", () => {
    // nån function
});