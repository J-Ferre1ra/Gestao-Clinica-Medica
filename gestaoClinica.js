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
