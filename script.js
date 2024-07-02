document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Seleciona os campos do formulário
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validação dos campos
        if (name === "" || email === "" || message === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Validação do email
        if (!email.includes("@")) {
            alert("Por favor, insira um endereço de email válido.");
            return;
        }

        // Se tudo estiver correto
        alert("Mensagem enviada com sucesso!");
        form.reset(); // Limpa o formulário
    });
});
