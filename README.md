# Sistema de Gestão Clínica (CLI)

Este projeto consiste em um motor de gestão de pacientes para clínicas médicas, desenvolvido em JavaScript puro (Node.js). O foco do sistema é a aplicação de **engenharia de software** voltada para a imutabilidade de estados e o tratamento robusto de erros, simulando um ambiente de desenvolvimento profissional.

## 🚀 Tecnologias Utilizadas

* **JavaScript (ES6+)**
* **Programação Funcional:** Uso intensivo de `map` e `filter` para manipulação de dados.
* **Imutabilidade:** Atualização de estados sem corromper estruturas originais.
* **Tratamento de Exceções:** Uso de `try/catch/throw` para blindagem contra dados inválidos.

## ⚙️ Funcionalidades

O sistema implementa um CRUD (Create, Read, Update, Delete) completo:

1. **Cadastro de Pacientes (`Create`):** Cadastro com validação de tipagem e integridade de dados via `try/catch`.
2. **Atualização de Status (`Update`):** Mudança de estado do paciente utilizando imutabilidade.
3. **Cancelamento de Atendimento (`Delete`):** Remoção de registros mantendo a consistência do array.
4. **Relatório de Fluxo (`Read`):** Geração de indicadores de produtividade da clínica.

## 💻 Como Rodar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Clone este repositório:
   ```bash
   git clone [https://github.com/J-Ferre1ra/Gestao-Clinica-Medica.git](https://github.com/J-Ferre1ra/Gestao-Clinica-Medica.git)
   ```
3. Navegue até a pasta:
   ```bash
   cd sistema-gestao-clinica
   ```
4. Execute o sistema:
   ```bash
   node gestaoClinica.js
   ```

## 🧠 Lições Aprendidas

Este projeto foi construído para solidificar conceitos de **Clean Code** e **State Management**. O desafio principal foi realizar operações de escrita em um ambiente imutável, garantindo que o sistema seja previsível e fácil de debugar em uma aplicação escalável.