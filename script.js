const button=document.getElementById('inspectBtn');
const result=document.getElementById('result');
button.addEventListener('click',()=>{
  result.hidden=false;
  result.innerHTML='<strong>⚠ SIMULATION CHECK</strong><br>This is a safe training example. In a real message, do not click first. Verify the sender, inspect the real destination domain, and open the official service independently. No credentials were requested or collected here.';
  button.textContent='Simulation inspected ✓';
});
