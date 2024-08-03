import { useDispatch, useSelector } from "react-redux";
import { StyledCart } from "./StyledCart";
import { FaRegTrashCan } from "react-icons/fa6";
import { getAllProducts, removeItem, resetCart } from "../../redux/CartReducer";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";


export default function Cart({ isOpen, onClose }) {

    const products = useSelector(getAllProducts)
    const dispatch = useDispatch()
    const total = () => {
        let total = 0
        products.map((item) => (total += item.quantity * item.price))
        return total.toFixed(2)
    }

    const cartRef = useRef(null);

    useEffect(() => {
        // Function to close the cart when clicking outside
        const handleClickOutside = (event) => {
            if (!event.target.closest('.cart') && !cartRef.current.contains(event.target)) {
                onClose(); // Close the cart if clicked outside and not inside the cart
            }
        };

        // Attach the event listener when the cart is open
        if (isOpen) {
            document.addEventListener("click", handleClickOutside);
        }

        // Remove the event listener when the component is unmounted or the cart is closed
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isOpen, onClose]);
   
  return (
    <StyledCart ref={cartRef}>
        <h1>Products in your cart</h1>
        <hr />
        {products?.map(product => (
            <div className="product" key={product.id}>
                <Link to={`/product/${product.id}`}><img src={import.meta.env.VITE_APP_UPLOAD_URL + product.image} alt="" /></Link>
                <div className="details">
                    <h1>{product.title}</h1>
                    <p>{product.description?.substring(0, 100)}</p>
                    <div className="price">{product.quantity} x ${product.price}</div>
                </div>
                <FaRegTrashCan className="trashIcon" onClick={() => dispatch(removeItem({id:product.id}))} />
            </div>
        ))}
        <div className="total">
            <span>Subtotal</span>
            <span>${total()}</span>
        </div>
        <button>Proceed to checkout</button>
        <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
    </StyledCart>
  )
}
