import axios from "axios";

// Dados fixos (simulação de cadastro)
const product = {
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fveronoticias.com%2Fpolitica%2Fjanja-promove-encontro-com-ministras-no-vale-do-jequitinhonha%2F&psig=AOvVaw13NsekWDT-GsbUI1FwP5bs&ust=1748626837469000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLD37_GcyY0DFQAAAAAdAAAAABAE",
    name: "Esbanja",
    description: "Gasta todo dinheiro da população e do nove dedos em viagens",
    price: 13.00,

};

const updateProduct = {
    // image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fveronoticias.com%2Fpolitica%2Fjanja-promove-encontro-com-ministras-no-vale-do-jequitinhonha%2F&psig=AOvVaw13NsekWDT-GsbUI1FwP5bs&ust=1748626837469000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLD37_GcyY0DFQAAAAAdAAAAABAE",
    // name: "Esbanja",
    description: "Janjacoins",
    price: 69.00,

};

// LINK
const link = "https://67620a7446efb3732373870b.mockapi.io/api/product";

// Registra o produto
async function registerProduct  (product){
    await axios.post(link, product)
    // Converte para JSON
    .then(response => {
        // console.log(`{$response.status}: Produto cadastrado com sucesso!`);
        console.log(response.data); //LOG
        
    })

    .catch(erro => {
        console.error("Erro ao cadastrar o produto", erro)
    })
    .finally(() => {
        console.log("Requisição POST finalizada");
        
    }) ;
}

//Id do produto
const id = 1

// Busca todos os produtos
async function getAllProduct (){
    //Faz a requisição do tipo GET
    await axios.get(link)
    .then(response => {
        console.log(response.data);
    })
    .catch(() => {
        console.error("Erro ao buscar o produto");
    })
    .finally(() => {
        console.log("Requisição GET finalizada");
        
    })
}

// Busca o produto
async function getProduct (id){
    //Faz a requisição do tipo GET
    await axios.get(`${link}/${id}`)  //concantenando o link com o id
    .then(response => {
        console.log(response.data);
    })
    .catch(() => {
        console.error("Erro ao buscar o produto");
    })
    .finally(() => {
        console.log("Requisição GET finalizada");
        
    })
}

// Exclui o produto
async function deleteProduct (id){
    //Faz a requisição do tipo GET
    await axios.delete(`${link}/${id}`)  //concantenando o link com o id
    .then(response => {
        console.log(`${response.status}: Produto Excluido com sucesso!`, response.data);
    })
    .catch(() => {
        console.error("Erro ao buscar o produto");
    })
    .finally(() => {
        console.log("Requisição DELETE finalizada");
        
    })
}

// Atualiza o produto
async function updateProduct (id, updateData){
    axios.put(`${link}/${id}`, updateData)

    .then(response => {
        console.log(`${response.status}: Produto atualizado com sucesso!`, response.data);
    })
    .catch(() => {
        console.error("Erro ao atualizar o produto");
    })
    .finally(() => {
        console.log("Requisição PUT finalizada");
    })
}


//--------------Chamada das functions---------------

// Para cadastrar precisamos enviar o object com os dados por parametro
await registerProduct(product);
// Busca tudo o que estiver no link (Endpoint)
// await getAllProduct();
// Busca apenas o produto do ID informado por parametro
// await getProduct(id);
// Exclui apenas o produto do ID informado por parametro
// await deleteProduct(id);
// Atualizar apenas o produto do ID informado por parametro, precisamos enviar o ID e o object com os dados alterados
// await updateProduct(id, updateProduct);
