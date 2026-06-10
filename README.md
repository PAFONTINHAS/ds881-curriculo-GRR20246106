## Executando o Projeto Localmente (Docker)

Este projeto foi configurado para ser executado em um ambiente isolado utilizando Docker, garantindo que não seja necessário instalar dependências como Node.js ou Angular CLI na máquina hospedeira.

### Pré-requisitos
* [Docker](https://docs.docker.com/get-docker/) instalado e em execução.
* [Docker Compose](https://docs.docker.com/compose/install/) instalado.

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU-USUARIO/ds881-curriculo-GRR20246106.git](https://github.com/SEU-USUARIO/ds881-curriculo-GRR20246106.git)

2. **Acesse o projeto localmente**
   ```bash
   cd ds881-curriculo-GRR20246106

3. **Inicie o contêiner:**

    Execute o comando abaixo na raiz do projeto. Na primeira execução, o Docker irá baixar a imagem do Node e instalar as dependências do Angular internamente.

   ```bash
    docker compose up --build

4. **Acesse a aplicação:**

    Assim que o terminal exibir a mensagem de que o Angular compilou com sucesso, abra o seu navegador e acesse:

    http://localhost:8080

5. **Hot Reload e Desenvolvimento:**

    Qualquer alteração feita no código-fonte através da sua IDE refletirá automaticamente no navegador. A pasta node_modules é gerenciada inteiramente por um volume anônimo dentro do contêiner, mantendo seu ambiente local limpo.

6. **Para encerrar a execução:**

    No terminal onde o processo está rodando, pressione Ctrl + C. Para remover os contêineres criados, você pode executar:

   ```bash
    docker compose down