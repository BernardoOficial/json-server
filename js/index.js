const form = document.querySelector("[data-form]");

form.addEventListener('submit', iniciarRequest)

function iniciarRequest(evento) {
    evento.preventDefault();

    const nome = evento.target.nome.value;
    const sobrenome = evento.target.sobrenome.value;
    const idade = evento.target.idade.value;
    console.log(nome, sobrenome, idade);

    fetch("http://localhost:3000/tarefas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: nome,
        description: sobrenome,
        link: idade
      })
    }).then((response) => response.json())
      .then((people) => console.log(people));
}