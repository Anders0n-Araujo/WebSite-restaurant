const receitas = [
    {
        id: 1,
        titulo: 'Croquetes',
        preco: 'R$25,00',
        imagem: 'delicious-food-croquettes-bowl.jpg',
    }, 
    {
        id: 2,
        titulo: 'Penne ao molho',
        preco: 'R$25,00',
        imagem: 'penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg',
    }, 
    {   
        id: 3,
        titulo: 'Buffalo Wings',
        preco: 'R$25,00',
        imagem: 'mexican-food-still-life.jpg',
    }, 
    {   
        id: 4,
        titulo: 'Burritos de carne moída',
        preco: 'R$25,00',
        imagem: 'burritos-wraps-with-minced-beef-vegetables-wooden-surface.jpg',
    }, 
    {   
        id: 5,
        titulo: 'Hamburgers Gourmet',
        preco: 'R$25,00',
        imagem: 'front-view-burgers-tray.jpg',
    }, 
    {       
        id: 6,
        titulo: 'Tapioca de Frutas',
        preco: 'R$25,00',
        imagem: 'flat-lay-delicious-brazilian-food-arrangement.jpg',
    }
 ];

document.querySelector('#search').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

const listaContainer = document.querySelector('.box-container');
const search = document.querySelector('#search-box');

function render(receitas){

    let lista = '';

    if(receitas.lenght <= 0){
        lista += `<div class ="no-products">Nenhum Produto Disponivel</div>`
    }
    else{
        receitas.forEach((receita, index) =>{
            lista += `
            <div class="box">
                <a href="#" class="fas fa-heart"></a> 
                <a href="#" class="fas fa-eye"></a>
                <img src="Images/${receita.imagem}" alt=""> 
                <h3>${receita.titulo}</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <span> ${receita.preco} </span>
                <a href="#" class="btn"> adicionar ao carrinho</a>
            </div>`;
        });
    }   
    
    listaContainer.innerHTML = lista
}

render(receitas)




