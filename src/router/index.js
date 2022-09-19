import Cart from "@/pages/Cart";
import Order from "@/pages/Order";
import Result from "@/pages/Result";
import Products from "@/pages/Products";
import Product from "@/pages/Product";
import F404 from "@/pages/F404";
                           
const routes = [
    {
        name: 'cart', path: "/cart", element: <Cart/>
    },
    {
        name: 'order', path: "/order", element: <Order/>
    },
    {
        name: 'result', path: "/result", element: <Result/>
    },
    {
        name: 'product', path: '/product/:id', element: <Product/>
    },
    {
        name: 'default', path: "/", element: <Products/>
    },
    {
        path: "*", element: <F404/>
    },
];

const routesMap = {};

routes.forEach(route => {
    if(route.hasOwnProperty('name')) {
        routesMap[route.name] = route.path;
    }
});

export { routes, routesMap }