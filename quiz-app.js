// Quiz App js 

let question = [
  {
  "question": "Which of the following is markup Language? ",
  "a":"HTML",
  "b":"JavaScript",
  "c":"css",
  "d":"bootstrap",
  "correct":"a"
},
{
  "question": "Which of these is not a programming Language?",
  "a":"PHP",
  "b":"JavaScript",
  "c":"Python",
  "d":"bootstrap",
  "correct":"d"
},
{
  "question": "when india got independence?",
  "a":"13 july 1947",
  "b":"15 August 1947",
  "c":"10 jan 1947",
  "d":"12 October 1947",
  "correct":"b"
}
]


let index = 0;
let text = document.getElementById("questionheading");
let total = question.length;
let right = 0;
let wrong = 0;
let option = document.querySelectorAll(".option");
let reset = ()=> {
  option.forEach((input)=>{
    input.checked = false;
  });
}

let endQuiz = ()=>{
  document.getElementById("box").innerHTML = `
    <h3> Thank you for submitting the Quiz </h3>
    ${right} / ${total}
  `
}

function getQuestion(){
  if(index === total){
    return endQuiz();
  }
  reset();
  let data = question[index];
  text.innerText = `${index+1}) ${data.question}`;
  option[0].nextElementSibling.innerText = data.a
  option[1].nextElementSibling.innerText = data.b
  option[2].nextElementSibling.innerText = data.c
  option[3].nextElementSibling.innerText = data.d
  // console.log(data);
}

// initial call
getQuestion();

function submitQuiz(){
     let data = question[index];
    const answer = getAnswer();
    console.log(answer,data.correct);
    if(answer === data.correct){
      right++;
    }
    else{
      wrong++;
    }
    index++;
    getQuestion();
    return;
}


let getAnswer = ()=> {
  let ans;
  option.forEach((input)=>{
      if(input.checked){
        ans =  input.value;
      }
  });
  return ans;
}


//  console.log(question[2])
//   console.log(getRandomColor()); // outputs a random color code like "#F0A3C7"
  