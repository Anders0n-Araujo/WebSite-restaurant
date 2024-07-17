document.querySelector('#search').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

const menuList = [
    {
        id: 1,
        titulo: 'X-Bacon Burger',
        preco: 'R$25,00',
        imagem: 'Menu/Hambuger.jpg',
    }, 
    {
        id: 2,
        titulo: 'Frango Grelhado com Arroz',
        preco: 'R$25,00',
        imagem: 'Menu/grilled-chicken-rice-spicy-chickpeas-avocado-cabbage-pepper-buddha-bowl.jpg',
    }, 
    {   
        id: 3,
        titulo: 'Coxinha de Frango',
        preco: 'R$25,00',
        imagem: 'Menu/front-view-delicious-brazilian-food-composition.jpg',
    }, 
    {   
        id: 4,
        titulo: 'Macarrão c/ Salada de Frango',
        preco: 'R$25,00',
        imagem: 'Menu/chicken-salad-fusilli-pasta-brown-plate.jpg',
    }, 
    {   
        id: 5,
        titulo: 'Carne com Ervas e Tomate',
        preco: 'R$25,00',
        imagem: 'Menu/caucasian-meat-govurma-with-herbs-tomatoes.jpg',
    }, 
    {       
        id: 6,
        titulo: 'Carne com ovo Frito',
        preco: 'R$25,00',
        imagem: 'Menu/orange-plate-with-fried-egg-meat.jpg',
    },
    {       
        id: 7,
        titulo: 'Sorvete de Chocolate com nozes',
        preco: 'R$25,00',
        imagem: 'Menu/side-view-chocolate-ice-cream-with-nuts-wafer-rolls.jpg',
    },
    {       
        id: 8,
        titulo: 'tom yum kung (Prato Tailandês)',
        preco: 'R$25,00',
        imagem: 'Menu/thai-food-tom-yum-kung-river-prawn-spicy-soup.jpg',
    },
    {       
        id: 9,
        titulo: 'Comida Mexicana',
        preco: 'R$25,00',
        imagem: 'Menu/top-view-tasty-mexican-food-with-nachos.jpg',
    }
];

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
 
 
const listaContainer = document.querySelector('.box-container');
const listaContainerMenu = document.querySelector('.box-container.menu');
const search = document.querySelector('#search-box');

function searchInKeyup(event){
    const searched = event.target.value;

    const receitasFound = receitasFilterInSearch(searched);
    console.log(receitasFound);
    const menuFound = menuFilterInSearch(searched);
    console.log(menuFound);
   
    receitasFound.length > 0 ? render(receitasFound) : listaContainer.innerHTML = `<h1> Nenhum Produto Encontrado </h1>`
    menuFound.length > 0 ? renderMenu(menuFound) : listaContainerMenu.innerHTML = `<h1> Nenhum Produto Encontrado </h1>`
}

function receitasFilterInSearch(searched){
    return receitas.filter(receitas =>{
        return receitas.titulo.toLowerCase().includes(searched.toLowerCase());
    });
}

function menuFilterInSearch(searched){
    return menuList.filter(menuList =>{
        return menuList.titulo.toLowerCase().includes(searched.toLowerCase());
    });
}

search.addEventListener('keyup',_.debounce(searchInKeyup,400));

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

function renderMenu(menuLists){

    let listaMenu = '';

    if(menuLists.lenght <= 0){
        listaMenu += `<div class ="no-products">Nenhum Produto Disponivel</div>`
    }
    else{
        menuLists.forEach((menuList, index) =>{
            listaMenu += `
            <div class="box">
                <div class="image">
                    <img src="Images/${menuList.imagem}" alt="">
                    <a href="#" class="fas fa-heart"></a>
                </div>
                <div class="content">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <h3>${menuList.titulo}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Hic, similique!</p>
                    <a href="#" class="btn">Adicionar ao Carrinho</a>
                    <span class="price"> ${menuList.preco} </span>
                </div>
            </div>
`;
        });
    }   
    
    listaContainerMenu.innerHTML = listaMenu
}

render(receitas)
renderMenu(menuList)




