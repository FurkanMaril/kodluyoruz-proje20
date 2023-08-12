let buttonTabs = document.querySelector(".btn-tabs");
let foodMenu = document.querySelector("#foodMenu ");
let btnList = ["All", "Korea", "Japan", "China"];

btnList.forEach(category => {
    let btnId = "btn" + category[0].toUpperCase() + category.slice(1);
    buttonTabs.innerHTML += `<button id="${btnId}">${category}</button>`;
});

function getFoodInfo(items){
    menu.forEach(food => {
        if(food.category == items){
            foodMenu.innerHTML += `
                <div class="col-12 col-sm-6">
                    <div class="card">
                        <img src="${food.img}" alt="">
                        <div class="card-content">
                            <div class="content-header">
                                <div class="content-title">${food.title}</div>
                                <div class="content-price">${food.price}</div>
                            </div>
                            <div class="content-text">${food.desc}</div>
                        </div>
                    </div>
                </div>  
            `;
        }
    });
}

let btnAll = document.querySelector("#btnAll");
let btnKorea = document.querySelector("#btnKorea");
let btnJapan = document.querySelector("#btnJapan");
let btnChina = document.querySelector("#btnChina");

btnAll.addEventListener("click", function(){
    console.log("All button clicked.");
    foodMenu.innerHTML = "";
    menu.forEach(food => {
        foodMenu.innerHTML += `
            <div class="col-12 col-sm-6">
                <div class="card">
                    <img src="${food.img}" alt="">
                    <div class="card-content">
                        <div class="content-header">
                            <div class="content-title">${food.title}</div>
                            <div class="content-price">${food.price}</div>
                        </div>
                        <div class="content-text">${food.desc}</div>
                    </div>
                </div>
            </div>  
        `;
    });
});

btnKorea.addEventListener("click", function(){
    console.log("Korea button clicked.");
    foodMenu.innerHTML = "";
    getFoodInfo("Korea");
});

btnJapan.addEventListener("click", function(){
    console.log("Japan button clicked.");
    foodMenu.innerHTML = "";
    getFoodInfo("Japan");
});

btnChina.addEventListener("click", function(){
    console.log("China button clicked.");
    foodMenu.innerHTML = "";
    getFoodInfo("China");
});