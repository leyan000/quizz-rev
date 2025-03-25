function showTab(tab) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => {
        section.classList.remove('active');
    });
    document.getElementById(tab + '-section').classList.add('active');
}

function saveFiche() {
    const title = document.getElementById("new-fiche-title").value;
    const content = document.getElementById("new-fiche-content").value;
    if (title && content) {
        const ficheElement = document.createElement("div");
        ficheElement.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
        document.getElementById("fiches-list").appendChild(ficheElement);
    }
}

function generateFiche() {
    const input = document.getElementById("generate-input").value;
    if (input) {
        document.getElementById("generated-fiche").innerText = `Fiche générée pour : ${input}`;
    }
}

function addQuestion() {
    const questionContainer = document.getElementById("question-container");
    const newQuestion = document.createElement("div");
    newQuestion.innerHTML = `<input type="text" class="question" placeholder="Entrez une question">
                             <input type="radio" name="answer${questionContainer.children.length}" value="true"> Vrai
                             <input type="radio" name="answer${questionContainer.children.length}" value="false"> Faux`;
    questionContainer.appendChild(newQuestion);
}

function saveQuiz() {
    const title = document.getElementById("quiz-title").value;
    if (title) {
        alert("Quiz enregistré !");
    }
}
