const user = document.getElementById('demoUser');
const pass = document.getElementById('demoPass');
const login = document.getElementById('demoLogin');
const result = document.getElementById('result');

login.addEventListener('click', () => {
  const hadInput = user.value.trim() || pass.value;
  // Intentionally never transmit, save, display, or log the entered values.
  user.value = '';
  pass.value = '';
  result.hidden = false;
  result.innerHTML = hadInput
    ? '<strong>⚠ TRAINING TRIGGERED</strong><br>Your test input was immediately discarded. No username or password was collected. In a real phishing attack, this is exactly the point where sensitive credentials could be stolen.'
    : '<strong>ℹ TRAINING MODE</strong><br>Use fictional test data to trigger the demonstration. Nothing is collected or stored.';
  login.textContent = 'Training checked ✓';
});

document.querySelectorAll('[data-answer]').forEach(button => {
  button.addEventListener('click', () => {
    const out = document.getElementById('quizResult');
    out.className = button.dataset.answer === 'good' ? 'good' : 'bad';
    out.textContent = button.dataset.answer === 'good'
      ? '✓ Correct. Open the official app/site independently and verify the alert there.'
      : '✕ Risky. Do not follow urgent login links from unexpected messages.';
  });
});