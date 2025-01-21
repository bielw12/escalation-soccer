// Seleciona o checkbox do toggle
const themeToggle = document.getElementById('theme-toggle');

// Função para alternar o tema
themeToggle.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});