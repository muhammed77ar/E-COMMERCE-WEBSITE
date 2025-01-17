import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Home from "./pages/home/Home"
import Products from "./pages/products/Products"
import Product from "./pages/product/Product"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat";
    position: relative;
    height: 100%;
}
`


const Layout = () => {
  return (
    <div className="app">
      <GlobalStyle />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/products/:id",
        element : <Products />
      },
      {
        path : "/product/:id",
        element : <Product />
      },
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
