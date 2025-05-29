import axios from "axios";

//Fazendo uma requisição do tipo GET com Axios

axios.get("https://67620a7446efb3732373870b.mockapi.io/api/product")

    // Se tiver sucesso, retorna os dados.

    .then(response => {
        console.log(response.data);
    })

    // Se der erro, retorna o erro
    .catch(erro => {
        console.erro("Erro ao fazer a requisição GET:", erro)
    })

    // Finaliza o processo
    .finally(done => {
        console.log("Finaliza a requisição GET", done)
    })