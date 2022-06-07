let fileNames = ["2-2-burger-free-download-png-thumb",
    "3-2-burger-free-png-image-thumb",
    "4-2-burger-png-file-thumb",
    "5-2-burger-png-thumb",
    "6-2-burger-png-image-thumb",
    "8-2-burger-picture-thumb",
    "9-2-burger-png-hd-thumb",
    "22174-1-burger-and-french-fries-thumb",
    "22198-9-burger-transparent-thumb",
    "22245-3-burger-image-thumb",
    "22388-5-burger-food-thumb",
    "22501-3-shack-burger-thumb",
    "145509-king-big-burger-download-hq-thumb",
    "145511-king-big-photos-burger-hq-image-free-thumb",
    "146698-king-cheese-burger-free-photo-thumb",
    "147677-burger-non-veg-king-free-clipart-hd-thumb",
    "158345-cheese-bacon-burger-free-clipart-hq-thumb",
    "158350-cheese-pic-bacon-burger-hd-image-free-thumb",
    "158353-cheese-bacon-burger-png-download-free-thumb",
    "158708-cheese-photos-burger-download-hd-thumb",
    "158963-burger-cheese-classic-hq-image-free-thumb",
    "158967-burger-cheese-photos-classic-png-download-free-thumb",
    "159186-burger-double-photos-cheese-free-photo-thumb",
    "159187-burger-double-cheese-free-png-hq-thumb",
    "7-2-burger-png-picture-thumb"
];
let burgerNames = [
    "B' Earth",
    "B' Super",
    "B' Pair",
    "B' Dungeon",
    "B' Burger",
    "B' Magic",
    "B' Spirit",
    "B' Relax",
    "B' Landy",
    "B' Sweet",
    "B' Spicy",
    "B' Healthy",
    "B' Workout",
    "B' Morning",
    "B' Picky",
    "B' Monster",
    "B' Farm",
    "B' Cheesy",
    "B' Life"
];

let ratings = [1, 2, 3, 4, 5];
let prices = [20, 30, 40, 50, 60, 70, 80, 90, 100, 120];

var listsOfBurgers = [];

var allProd = document.getElementById("products");
var favProd = document.getElementById("todaysFavorite");
var menuProd = document.getElementById("menuList");

//products
if (allProd != null) {
    allProd.innerHTML = getItems(60);
}
//favorite
if (favProd != null) {
    favProd.innerHTML = getItems(5);
}
//menu
if (menuProd != null) {
    menuProd.innerHTML = getItems(10);
}

//display random items
function getItems(number){
    let container = "";
    for (let i = 0; i < number; i++) {

        //saving values
        var image = getRandomImage();
        var name = getRandomName();
        var rating = getRandomRatingStar();
        var price = getRandomPrice();

        saveValuesToArray(image, name, rating, price);

        container += '<div class="col burger-container mt-5">';
        container +=            '<div class="burger-content" role="button">';
        container +=                '<div class="d-flex justify-content-center align-items-center">';
        container +=                    '<img src="./img/'+ image +'" alt="'+ image +'" class="burger-img">';
        container +=                    '</div>';
        container +=            '</div>';
        container +=            '<div class="burger-content text-center" role="button">';
        container +=                '<h5><strong>'+ name +'</strong></h5>';
        container +=            '</div>';
        container +=            '<div class="burger-content text-center"  role="button">';
        container +=                '<div class="burger-rating">';
        container +=                    rating;
        container +=                '</div>';
        container +=            '</div>';
        container +=            '<div class="burger-content text-center">';
        container +=                '<div class="burger-bottom text-center">';
        container +=                    '<div class="burger-price" role="button">';
        container +=                        '<p class=""><strong style="font-size: 20px">'+ price +'</strong> php</p>';
        container +=                    '</div>';
        container +=                    '<div class="burger-cart bg-darkred">';
        container +=                        '<button class="" type="button" data-bs-toggle="modal" data-bs-target="#Cart">';
        container +=                            '<i class="fa-solid fa-cart-shopping text-white"></i>';
        container +=                        '</button>';
        container +=                    '</div>';
        container +=                '</div>';
        container +=            '</div>';
        container +=        '</div>;';
        }
        return container;
}

function saveValuesToArray(image, name, rating, price){
    var list = {};
    list['image'] = image;
    list['name'] = name;
    list['rating'] = rating;
    list['price'] = price;

    listsOfBurgers.push(list);
}

function getRandomImage() {
    return fileNames[Math.floor(Math.random() * fileNames.length)] + ".png";
}

function getRandomName() {
    return burgerNames[Math.floor(Math.random() * burgerNames.length)];
}

function getRandomRating() {
    return Math.floor(Math.random() * ratings.length + 1);
}

function getRandomRatingStar() {
    let ratingScore = "";
    let rating = getRandomRating();
    for (let i = 0; i < ratings.length; i++) {
        let ratingTmp = '<i class="fa-solid fa-star ';
        if (i + 1 <= rating) {
            ratingTmp += ' burger-rating-active';
        }
        ratingTmp += '""></i>';
        ratingScore += ratingTmp;
    }
    return ratingScore + '(' + rating + ')';
}

function getRandomPrice() {
    return prices[Math.floor(Math.random() * prices.length)];
}

function productClick(item){
    //display items
    //alert(listsOfBurgers[item].name);
}