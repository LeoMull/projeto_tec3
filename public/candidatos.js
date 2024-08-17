// Carregar e exibir a lista de candidatos
async function loadCandidatos() {
    const response = await fetch('/api/candidatos');
    const candidatos = await response.json();
    const candidatosList = document.getElementById('candidatos-list');
    candidatosList.innerHTML = '';

    candidatos.forEach(candidato => {
        const candidatoDiv = document.createElement('div');
        candidatoDiv.classList.add('candidato');
        candidatoDiv.innerHTML = `
            <h3>${candidato.nome} (CPF: ${candidato.cpf})</h3>
            <p>Email: ${candidato.email}</p>
            <p>Telefone: ${candidato.telefone}</p>
            <p>Curso: ${candidato.curso}</p>
            <p>Instituição: ${candidato.instituicao}</p>
            <p>Tipo de Cota: ${candidato.tipo_cota}</p>
        `;
        candidatosList.appendChild(candidatoDiv);
    });
}

// Adicionar novo candidato
document.getElementById('candidato-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    await fetch('/api/candidatos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    event.target.reset();
    loadCandidatos();
});

// Carregar a lista de candidatos ao carregar a página
loadCandidatos();
