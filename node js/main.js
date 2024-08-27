const products = [
    {
        id: 1,
        title: "Autumn Hoodle",
        price: 264.0,
        image:"https://cdna.lystit.com/photos/boohooman/mzz77381-wine-23fa84e5-.jpeg",
    },
    
    {
    
        id: 2,
        title: "Autumn Hoodle",
        price: 380.0,
        image:"https://i.ebayimg.com/images/g/yfsAAOSwJYRi~QcL/s-l1600.jpg",
    
    
    
    },
    
    {
        id: 3,
        title: "Autumn Hoodle",
        price: 400.0,
        image:"https://images.asos-media.com/products/asos-design-cotton-turtleneck-sweater-in-black/22687258-1-black?$n_640w$&wid=513&fit=constrain",
    },
    
    {
    
         id: 4,
        title: "Autumn Hoodle",
        price: 500.0,
        image:"https://i5.walmartimages.com/asr/0eb59ac7-26ae-4951-89fd-16c0a1aa935a_1.bbf2ef19eb71cac8aaee28f4f444c16c.jpeg",
    
    
    },
    
    {
    
      
        id: 5,
        title: "Autumn Hoodle",
        price: 550.0,
        image:"https://d1l2kcmc130e06.cloudfront.net/2/images/colors_960x1200/a4-nw3002-white.jpg",
    
    
    },
    
    {
      
       id: 6,
        title: "Autumn Hoodle",
        price: 600.0,
        image:"https://th.bing.com/th/id/OIP.PBPY7bqI-ECV0Oo_10XU6AHaHa?rs=1&pid=ImgDetMain",
    
    },
    {
    
        id: 7,
        title: "Autumn Hoodle",
        price: 200.0,
        image:"https://th.bing.com/th/id/OIP.TZ8vmeeqb6l2EVdhGfBUyAHaJQ?w=800&h=1000&rs=1&pid=ImgDetMain", 
    },
    {
    
        id: 8,
        title: "Autumn Hoodle",
        price: 350.0,
        image:"https://th.bing.com/th/id/OIP.RQ0gW_dM3xek4iKftfH4jwAAAA?rs=1&pid=ImgDetMain",
    
    },
    {
    
        id: 9,
        title: "Autumn Hoodle",
        price: 400.0,
        image:"https://th.bing.com/th/id/OIP.lDrukCvDadQxUicox-IHCwHaHe?w=1001&h=1010&rs=1&pid=ImgDetMain",
    
    },
    
    {
    
        id: 10,
        title: "Autumn Hoodle",
        price: 600.0,
        image:"https://i.ebayimg.com/images/g/AgAAAOSwXq5eMc0E/s-l1600.jpg",
    
    },
    
    ];
    
    //Get the products List and elements
    const productList = document.getElementById("productList");
    const cartItemsElement = document.getElementById("cartItems");
    const cartTotalElement = document.getElementById("cartTotal");
    
    //Store cart Items In Local Storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    //Render Products On Page
    function renderProducts(){
        productList.innerHTML = products.map(
            (product) => `
            <div class="product">
                <img src="${product.image}" alt="${product.title}"class="product-img">
                <div class="product-info">
                    <h2 class="product-title">${product.title}</h2>
                    <p class="product-price">RS.${product.price.toFixed(2)}</p>
                    <a class="add-to-cart" data-id="${product.id}">Add to cart</a>
                </div>
            </div>
            `
         )
        .join("");         
    }
    
    //Renter Prodcuts On Cart Page
    function renderCartItems() {
        cartItemsElement.innerHTML = cart
        .map(
            (item) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" />
                <div class="cart-item-info">
                <h2 class="cart-item-title">${item.title}</h2>
                <input class="cart-item-quantity" type="number" name="" min="1" value="${item.quantity}" data-id="${item.id}" />
                </div>
                <h2 class="cart-item-price">${item.price}</h2>
                <button class="remove-from-cart" data-id="${item.id}">Remove</button>
            </div>
            `
         )
     .join("");
    }
    
    
    
    //Check If On Cart Page
    if (window.location.pathname.includes("cart.html")) {
        renderCartItems();
    } else {
        renderProducts(); 
    }
    
    renderProducts();
    renderCartItems();
    
    