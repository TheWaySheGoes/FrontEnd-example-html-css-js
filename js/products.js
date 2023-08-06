/*
This script is imported in the products page. it creates products objects and add them to the products page
*/

//names and objects for products page
let cakesNames = ["Baby", "Creamy", "Sweet", "Donny", "Marie", "Kiki", "Carusel", "Wako"];
let cakes = importObjects("image/cupcakes/c", 10);

let weddingCakesNames = ["Groom", "Bride", "Pidgen", "Crown", "Fun", "Love", "hart", "Cream"];
let weddingCakes = importObjects("image/weddingcakes/w", 100);

let noImageMsg = "Image comming soon";

//add products to products page
window.onload = showObjects(cakes, "cupcakes_container");
window.onload = showObjects(weddingCakes, "wedding_cakes_container");


//compact function for constructing product objects
function importObjects(path, priceMultiplier) {
    let tempObjects = []
    for (let index = 1; index <= 8; index++) {
        let obj = {
            path: path + (index) + ".png",
            title: cakesNames[index - 1],
            price: (Math.random() * priceMultiplier).toFixed(2) + "$"
        }
        tempObjects.push(obj);
    }
    return tempObjects;
}

//logic for adding product elements to html products webpage
function showObjects(obj, locationId) {
    obj.forEach(element => {
        console.log(element)

        let article = document.createElement("article");

        let img = document.createElement("img");
        img.setAttribute("src", element["path"]);
        img.setAttribute("alt", noImageMsg);
        //img.setAttribute("style", "max-width: 20%;");
        article.appendChild(img);

        let title = document.createElement("h1");
        title.textContent = element.title;
        article.appendChild(title);

        let price = document.createElement("p");
        price.textContent = element.price;
        article.appendChild(price);

        document.getElementById(locationId).appendChild(article)
    });
}







