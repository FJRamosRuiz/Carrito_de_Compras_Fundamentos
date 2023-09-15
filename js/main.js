import loader from "./components/loader.js"
import showMenu from "./components/showMenu.js"
import showCart from "./components/showCart.js"
import products from "./components/products.js"
import getProducts from "./helpders/getProducts.js"
import cart from "./components/cart.js"


/* Ocultar loader */
loader()

showMenu()


/* Mostrar Carrito */
showCart()


/* products */
const {db, printProducts} = products(await getProducts())

cart(db, printProducts)