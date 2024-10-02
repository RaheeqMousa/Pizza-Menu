async function getMenu(){

    const elements = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);

    const array_of_elements = await elements.json();

    const recipes=array_of_elements.recipes;
    console.log(recipes);
    const result=recipes.map(function(pizza){
        return `
            <div class="pizza">
            <img src='${pizza.image_url}' />
            <p>${pizza.title}</p>
            </div>
        `;
     }).join('');

    console.log(result);
    document.querySelector(".PizzaMenu .row").innerHTML=result;

}

getMenu();