const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const burgerMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const menuCarrito = document.querySelector(".navbar-shopping-cart")
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const shoppingCartContainer = document.querySelector("#shopping-cart-container")
const productDetailContainer = document.querySelector("#product-detail")
const productList = []
const cardsContainer = document.querySelector(".cards-container")
const mainContainer = document.querySelector(".main-container");


menuEmail.addEventListener("click", toggleDesktopMenu)
burgerMenu.addEventListener("click", toggleMobileMenu)
menuCarrito.addEventListener("click", toggleCarritoAside)
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive")
    const isProductDetailContainerClosed = productDetailContainer.classList.contains("inactive")
    
    
    if (!isAsideClosed || !isProductDetailContainerClosed) {
        shoppingCartContainer.classList.add("inactive")
        productDetailContainer.classList.add("inactive")
    }

    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive")
    const isProductDetailContainerClosed = productDetailContainer.classList.contains("inactive")

    if (!isAsideClosed || !isProductDetailContainerClosed) {
        shoppingCartContainer.classList.add("inactive")
        productDetailContainer.classList.add("inactive")
    }

    mobileMenu.classList.toggle("inactive")
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive")
    const isProductDetailContainerClosed = productDetailContainer.classList.contains("inactive")
    
    if (!isMobileMenuClosed || !isProductDetailContainerClosed || !isDesktopMenuClosed) {
        mobileMenu.classList.add("inactive")
        productDetailContainer.classList.add("inactive")
        desktopMenu.classList.add("inactive")
    }

    shoppingCartContainer.classList.toggle("inactive")
}

function closeMenus() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isMenuCarritoClosed = shoppingCartContainer.classList.contains('inactive')
    
    if (!isMobileMenuClosed || !isDesktopMenuClosed || !isMenuCarritoClosed)  {

        mobileMenu.classList.add("inactive")
        desktopMenu.classList.add("inactive")   
        shoppingCartContainer.classList.add("inactive")
    }
}
  
mainContainer.addEventListener('click', closeMenus);

function openProductDetailAside() {
    productDetailContainer.classList.remove("inactive")
}

function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive")
}

productList.push({
    name: "Scooter",
    price: 120,
    image: "https://images.pexels.com/photos/2727413/pexels-photo-2727413.jpeg?auto=compress&cs=tinysrgb&w=1600",
})
productList.push({
    name: "Scooter",
    price: 120,
    image: "https://images.pexels.com/photos/2727413/pexels-photo-2727413.jpeg?auto=compress&cs=tinysrgb&w=1600",
})
productList.push({
    name: "Scooter",
    price: 120,
    image: "https://images.pexels.com/photos/2727413/pexels-photo-2727413.jpeg?auto=compress&cs=tinysrgb&w=1600",
})
productList.push({
    name: "Scooter",
    price: 120,
    image: "https://images.pexels.com/photos/2727413/pexels-photo-2727413.jpeg?auto=compress&cs=tinysrgb&w=1600",
})
productList.push({
    name: "Scooter",
    price: 120,
    image: "https://images.pexels.com/photos/2727413/pexels-photo-2727413.jpeg?auto=compress&cs=tinysrgb&w=1600",
})

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
        productImg.addEventListener("click", openProductDetailAside)
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div")
    
        const productPrice = document.createElement("p")
        productPrice.innerText = `$${product.price}`
        const productName = document.createElement("p")
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        
        const productInfoFigure = document.createElement("figure")
        const productImgCart = document.createElement("img")
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)
