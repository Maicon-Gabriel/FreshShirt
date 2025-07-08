window.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-theme");
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const html = document.documentElement;
    const isDark = html.getAttribute("data-bs-theme") === "dark";
    html.setAttribute("data-bs-theme", isDark ? "light" : "dark");
    toggleButton.textContent = isDark ? "Modo Escuro" : "Modo Claro";
  });

  const form = document.getElementById("form-cadastro");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const telefone = document.getElementById("telefone");
    const endereco = document.getElementById("endereco");

    let erros = [];

    if (nome.value.trim().length < 3) {
      erros.push("Nome deve ter pelo menos 3 letras.");
    }

    if (!email.value.includes("@") || !email.value.includes(".")) {
      erros.push("E-mail inválido.");
    }

    if (senha.value.length < 6) {
      erros.push("Senha deve ter no mínimo 6 caracteres.");
    }

    if (!telefone.value.match(/^\d{11}$/)) {
      erros.push("Telefone deve conter 11 números (com DDD).");
    }

    if (endereco.value.trim() === "") {
      erros.push("Endereço é obrigatório.");
    }

    if (erros.length > 0) {
      alert("Erros:\n" + erros.join("\n"));
    } else {
      alert("Cadastro realizado com sucesso!");
      this.reset();
    }
  });
});
