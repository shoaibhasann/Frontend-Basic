const quizData = [
  {
    question: "Who invented computer?",
    options: ["Elon Musk", "Bill Gates", "Andrew Tate", "Charles Babbage"],
    correctAnswer: 3,
    number: 1
  },
  {
    question: "How many days in a year?",
    options: ["365", "366", "300+65", "Depends if there's leap year or not"],
    correctAnswer: 3,
    number: 2

  },
  {
    question: "How many months have 28 days?",
    options: ["Depends if there's leap year or not", "12", "1", "2"],
    correctAnswer: 1,
    number: 3
  },
];

let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

const quizContainer = document.getElementById("quizContainer");
const submitBtn = document.getElementById("submitBtn");
const resultPopup = document.getElementById("resultPopup");
const leaderboard = document.getElementById("leaderboard");

function displayQuestion(){
    const question = quizData[currentQuestion].question;
    const options = quizData[currentQuestion].options;
    const questionNumber = quizData[currentQuestion].number

    // HTML code for question and answers
    let optionsHtml = "";
    
    for(let i = 0; i < options.length; i++){
        optionsHtml += `<option value="${i}">${options[i]}</option>`;
    }  

    const questionHtml = `
    <h2>Q.${questionNumber} ${question}</h2>
    <select id="answerOptions">
      ${optionsHtml}
    </select>
  `;

  quizContainer.innerHTML = questionHtml;
}

function checkAnswer(){
    const selectOption = document.getElementById("answerOptions").value ;
    const answer = quizData[currentQuestion].correctAnswer;

    if(selectOption == answer){
        resultPopup.innerHTML = 'Status: Correct Answer';
        resultPopup.style.display = "block";
        resultPopup.style.backgroundColor = 'green';
        correctAnswers++
    }
    else{
        resultPopup.innerHTML = 'Status: Wrong Answer';
        resultPopup.style.display = "block";
        resultPopup.style.backgroundColor = 'red'
        incorrectAnswers++
    }


    currentQuestion++

    if(currentQuestion < quizData.length){
        displayQuestion()
    }
    else{
        displayLeaderboard();
    }

}

function displayLeaderboard(){
    const right = document.getElementById('right');
    const wrong = document.getElementById('wrong');
    const finalResult = document.getElementById('finalResult');

    right.innerHTML = `Total Right Question : ${correctAnswers}`
    wrong.innerHTML = `Total Wrong Question : ${incorrectAnswers}`
    
    if(correctAnswers > incorrectAnswers){
        finalResult.innerHTML = `Final Result : Pass`
    }
    else{
        finalResult.innerHTML = `Final Result : Fail`
    }
    document.getElementById('quiz').style.display = 'none'
    resultPopup.style.display = 'none'
    leaderboard.style.display = 'flex'
}

// checking Answers
submitBtn.addEventListener('click',checkAnswer);


displayQuestion();