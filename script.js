const quizData = [
    {
        question: "Сколько спутников у Марса?",
        a: "13",
        b: "2",
        c: "51",
        d: "1",
        correct: "b",
    },
    {
        question: "Самый большой вулкан Солнечной системы называется «Гора Олимп». Где он находится?",
        a: "Юпитер",
        b: "Земля",
        c: "Венера",
        d: "Марс",
        correct: "d",
    },
    {
        question: "Какая планета ближе всех расположена к Солнцу?",
        a: "Венера",
        b: "Земля",
        c: "Меркурий",
        d: "Нептун",
        correct: "c",
    },
    {
        question: "Из чего в основном состоят кометы?",
        a: "Ядовитая житкость",
        b: "Лед и пыль",
        c: "Расплавенный камень",
        d: "Ржавый металл",
        correct: "b",
    }
];

const quiz = document.getElementById ("quiz")
const answerElements = document.querySelectorAll (".answer")
const questionElements = document.getElementById ("quiestion")
const a_text = document.getElementById ("a_text")
const b_text = document.getElementById ("b_text")
const c_text = document.getElementById ("c_text")
const d_text = document.getElementById ("d_text")
const submitButton = document.getElementById ("submit")


let currentQiuz = 0
let score = 0

loadQuiz()

function loadQuiz () {

    deselectAnswer()

    const currentQiuzData = quizData[currentQiuz]
    
    questionElements.innerText = currentQiuzData.question

    a_text.innerText = currentQiuzData.a
    b_text.innerText = currentQiuzData.b
    c_text.innerText = currentQiuzData.c
    d_text.innerText = currentQiuzData.d
}

function deselectAnswer () {
    answerElements.forEach(answerElement => answerElement.checked = false)
}

function getSelected () {
    
    answerElements.forEach(answerElement => {
        if (answerElement.checked){
            answer = answerElement.id
        }
    })
    return answer
}

submitButton.addEventListener ("click", () => {
    const answer = getSelected()
    if (answer){
        if (answer === quizData[currentQiuz].correct){
            score++
        }
    }

    currentQiuz++

    if (currentQiuz < quizData.length){
        loadQuiz()
    }
    else {
        quiz.innerHTML =
        `<h2>Правильных ${score}/${quizData.length} ответов!</h2>
        <button onclick="location.reload()">Повторить</button>`
    }
})