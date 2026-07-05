let pacientes = []

function cadastrarPaciente(nome, idade) {
    
    try {
        if (nome === "" || typeof idade !== "number") {
            throw new Error("Erro no Cadastro: Dados inválidos.");
        }
        
        const fichaNova ={
            id: pacientes.length + 1,
            nome: nome,
            idade: idade,
            status: "Aguardando Triagem"
        }

        pacientes = [...pacientes, fichaNova]
        console.log(`Sucesso: ${nome} adicionado à fila.`);
    } catch (error) {
        console.error(error.message);
        
    }
}

cadastrarPaciente("João Ferreira", "trinta")
cadastrarPaciente("", 30)
cadastrarPaciente('Lucas', 20)

console.log("Banco de dados atual:", pacientes);


function atualizarStatus(id, novoStatus) {

    pacientes = pacientes.map(paciente =>{
        if (paciente.id === id) {
            return {...paciente, status: novoStatus}
        }
        return paciente
    })
}

function cancelarAtendimento(id) {
    const fichaAtendimentos = pacientes.filter(paciente =>paciente.id !== id)

    pacientes = fichaAtendimentos
}

function gerarRelatorio() {
    const totalGeral = pacientes.length

    const aguardando = pacientes.filter(paciente => paciente.status === "Aguardando Triagem")

    console.log(`Total: ${totalGeral}`);
    console.log(`Aguardando: ${aguardando.length}`);
    
}