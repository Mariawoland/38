const firstLine = [
    {
        image: 'img/img6.png',
        title: 'Apple',
        description: 'Apple is one of the most famous smart watches providing company.'
    },
    {
        image: 'img/img7.png',
        title: 'Xiaomi',
        description: 'Xiaomi smart watches are produced by MI company.'
    },
    {
        image: 'img/img8.png',
        title: 'FitBit',
        description: 'FitBit smart watches are best for there health and fitness features.'
    },
]

const fisrtLineBox = document.getElementById("setting-201");

function postInfo() {

    firstLine.map((postInfoData) => {

        const newBox = document.createElement("div");
        newBox.classList.add("col-lg-4");
        newBox.classList.add("col-md-6");
        newBox.classList.add("col-12");
        newBox.classList.add("p-4");
        newBox.innerHTML = `

        <div class="setting-202">
            
            <img src="${postInfoData.image}">

            <div class="d-flex flex-column gap-3">
                <span class="setting-203">${postInfoData.title}</span>
                <p class="setting-204">${postInfoData.description}</p>
            </div>

        </div>
        `

        fisrtLineBox.appendChild(newBox);
    });
}

postInfo();




//MASIVEBI; ERTI YVELA PRODUQTISTVIS MEORE KALATASHI DAMATEBULI PRODUQTEBISTVIS
let products = [];
let cart = [];

//AXIOSIS OBIEQTEBIS GAMODZAXEBA
async function fetchProducts() {

    try {
        const response = await axios.get('https://fakestoreapi.com/products');

        //MTLIANI INFOS MASIVSHI GAMOTANA
        products = response.data;

        //BARATEBIS BECHDVIS PUNQCIA
        displayProducts();

    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

//BARATEBIS GAMOSATANI PUNQCIA
function displayProducts() {
    const productList = document.getElementById('setting-303');
    productList.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add("col-lg-4");
        card.classList.add("col-md-6");
        card.classList.add("col-12");
        card.classList.add("p-4");
        card.innerHTML = `
        <div class="setting-304">
        
            <div class="setting-307">
             
                <img role="button" class="cartButton" onclick="addToCart(${product.id})" src="img/img13.png" id="${product.id}" data-name="${product.title}" data-price="${product.price}" data-image="${product.image}">
                <img src="img/img14.png">
            </div>
        
            <img class="setting-305" src="${product.image}">
            <h4>${product.title}</h4>
            <img src="img/img12.png">
        
            <div class="d-flex gap-2">
        
                <p class="setting-306">$300</p>
                <p>$${product.price}</p>
            </div>

        </div>
        `;
        productList.appendChild(card);
    });
}


//KALATASHI DAMATEBIS PUNQCIA
function addToCart(productId) {

    //EDZEBS ARIS TU ARA KONKRETULI ID KALATIS MASIVSHI
    const productToAdd = products.find(product => product.id === productId);


    if (productToAdd) {
        const cartItem = cart.find(item => item.product.id === productId);

        //TU ARIS RAODENOBAS ZRDIS
        if (cartItem) {
            cartItem.quantity++;
        } else {
            //TU AR ARIS KALATASHI GAMOAQVS BARATI
            cart.push({ product: productToAdd, quantity: 1 });
        }

        //KALATIS GANAXLEBA
        updateCartDisplay();
    }

}


//KALATIS GANAXLEBIS PUNQCIA
function updateCartDisplay() {

    //KALATA
    const cartItemsList = document.getElementById('cart-001');
    cartItemsList.innerHTML = '';

    let total = 0;

    //NIVTEBIS CARTSHI GAMOTANA
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
        <div class="cart-002 d-flex">

            <img class="cart-006" src="${item.product.image}">

            <div>
                
                <p>${item.product.title} - $${(item.product.price * item.quantity).toFixed(2)}</p>

                <div class="cart-003">
                
                    <button onclick="increaseQuantity(${item.product.id})">+</button>
                    <p>${item.quantity}</p>
                    <button onclick="decreaseQuantity(${item.product.id})">-</button>
                    <button onclick="removeFromCart(${item.product.id})">x</button>

                </div>

            </div>
            
        </div>
        `;
        cartItemsList.appendChild(li);

        total += item.product.price * item.quantity;
    });

    const cartTotal = document.getElementById('cart-total');
    cartTotal.textContent = total.toFixed(2);
    document.getElementById("setting-006").innerHTML = cart.length;
}

//PRODUQTIS RAODENOBIS GAZRDA
function increaseQuantity(productId) {
    const cartItem = cart.find(item => item.product.id === productId);

    if (cartItem) {
        cartItem.quantity++;
        updateCartDisplay();
    }
}

//PRODUQTIS RAODENOBIS SHEMCIREBA
function decreaseQuantity(productId) {
    const cartItem = cart.find(item => item.product.id === productId);

    if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--;
        updateCartDisplay();
    }
}

//PRODUQTIS KALATIDAN WASHLA
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.product.id === productId);

    if (index !== -1) {
        cart.splice(index, 1);
        updateCartDisplay();
    }
}


fetchProducts();





const thirdLine = [
    {
        image: 'img/img9.png',
        title: 'Hamza Faizi',
        description: 'Don’t waste time, just order! This is the best website to puschase smart watches.',
        imageTwo: 'img/img12.png',
        image2: 'img/img10.png',
        title2: 'Hafiz Huzaifa',
        description2: 'I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.',
        imageTwo2: 'img/img12.png'
    }
];

const thirdLineBox = document.getElementById("setting-401");

for (let i = 0; i < 5; i++) {

    function postInfoTwo() {

        thirdLine.map((postInfoData) => {

            const slide = document.createElement("swiper-slide");
            slide.innerHTML = `
        <div class="container pb-5">
            <div class="row">
                <div class="col-lg-6 col-12 p-4">
                <div class="setting-202">
            
                    <img src="${postInfoData.image}">

                    <div class="d-flex flex-column gap-3">
                        <span class="setting-203">${postInfoData.title}</span>
                        <p class="setting-204 mb-0">${postInfoData.description}</p>
                        <img src="${postInfoData.imageTwo}" width="40%;">
                    </div>

                </div>
                   
            </div>

            <div class="col-lg-6 col-12 p-4">
                <div class="setting-202">
            
                    <img src="${postInfoData.image2}">

                    <div class="d-flex flex-column gap-3">
                        <span class="setting-203">${postInfoData.title2}</span>
                        <p class="setting-204 mb-0">${postInfoData.description2}</p>
                        <img src="${postInfoData.imageTwo2}" width="40%;">
                    </div>

                </div>
                   
            </div>
                </div>
            </div>
        </div>`

            thirdLineBox.appendChild(slide);
        });
    }

    postInfoTwo();
}