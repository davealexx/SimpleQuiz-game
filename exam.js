let questions = [
    { question: "what is the capital of france?", 
        answer: "Paris" && "paris"
    },
     { question: "what is the capital of Nigeria?", 
        answer: "Abuja" && "abuja"
    },
     { question: "how many days are in a week?", 
        answer: "7"
    },
     { question: "who is the president of United States?", 
        answer: "Donald Trump" && "donald trump"
    },
    { question: "what is a feamale chicken called?", 
        answer: "Hen" && "hen"
    },
];
console.log(questions)
let score = 0;
let CurrentQuestion = 0;

document.getElementById('question').textContent = questions[CurrentQuestion].question

function checkAnswer(){
    let userAnswer = document.getElementById('answer').value.toLowerCase();
    let isCorrect = false;

    if(userAnswer === questions[CurrentQuestion].answer){
        isCorrect = true;
        score++;  

        document.getElementById('feedback').textContent = 'Correct!'
    } else{
        document.getElementById('feedback').textContent = 'Wrong! answer:' + questions[CurrentQuestion].answer;
    }
 
    CurrentQuestion++

    if(CurrentQuestion < questions.length){
        setTimeout(() => {
             document.getElementById('feedback').textContent = '';

        document.getElementById('question').textContent = questions[CurrentQuestion].question;  

        document.getElementById('answer').value = '';
        }, 1000);
    } else{
        setTimeout(showResult, 1000)
    }
}

function showResult(){
    let message = '';
    switch (score) {
        case 0:
            message = 'you scored 0/5 -😭 try again!'
            break;
        case 1:
            message = 'you scored 1/5 😭 - Poor!'
            break;
        case 2:
            message = 'you scored 2/5 😥 - Not bad !'
            break;
        case 3:
            message = 'you scored 3/5 😊 - Good Job!'
            break;
         case 4:
            message = 'you scored 4/5 😊 - Nice!'
            break;
         case 5:
            message = 'you scored 5/5 🥳 - Perfect!'
            break;
    
        default: message = 'something wrong happened'
            break;
    }

    document.querySelector('.quiz-container').innerHTML = `<h2> ${message}</h2>`;
}