function checkAnswers() {
  let score = 0;
  const answers = {
    q1: 'a', // Resposta correta para a pergunta 1
    q2: 'a', // Resposta correta para a pergunta 2
    q3: 'b', // Resposta correta para a pergunta 3
    q4: 'c'  // Resposta correta para a pergunta 4
  };

  const form = document.forms['quiz-form'];

  for (let q in answers) {
    const selectedAnswer = form[q].value;
    if (selectedAnswer === answers[q]) {
      score++;
    }
  }

  const resultDiv = document.getElementById('result');
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = `Você acertou ${score} de 4 perguntas!`;

  resultDiv.style.display = 'block';
}