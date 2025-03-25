const correctCode = "1234";  // Code d'accès unique
const questions = [
    { q: "Un signal analogique a une fréquence fixe.", a: false, e: "Un signal analogique varie continuellement en amplitude et en fréquence." },
    { q: "Un microphone à condensateur nécessite une alimentation fantôme.", a: true, e: "Les microphones à condensateur nécessitent généralement une alimentation de +48V." }
];

let score = 0, index = 0;

function checkAccess() {
    const inputCode = document.getElementById("access-code").value;
    if (inputCode === correctCode) {
        document.getElementById("access-container").style.display = "none";
        document.getElementById("quiz-container").style.display = "block";
        loadQuestion();
    } else {
        alert("Code incorrect !");
    }
}

function loadQuestion() {
    if (index < questions.length) {
        document.getElementById("question").textContent = questions[index].q;
        document.getElementById("explanation").textContent = "";
    } else {
        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("score-container").style.display = "block";
        document.getElementById("score").textContent = `Votre score : ${score}/${questions.length}`;
    }
}

function answer(userAnswer) {
    if (userAnswer === questions[index].a) {
        score++;
    }
    document.getElementById("explanation").textContent = questions[index].e;
    index++;
    setTimeout(loadQuestion, 2000);
}
