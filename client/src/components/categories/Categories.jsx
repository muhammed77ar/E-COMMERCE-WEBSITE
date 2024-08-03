import { Link } from "react-router-dom";
import { Category } from "./StyledCategories";

export default function Categories() {
    return (
        <>
        <Category>
            <div className="div1">
                <Link className="link" to={"/products/6"}>
                    <button type="button">Sale</button>
                </Link>
            </div>
            <div className="div2">
                <Link className="link" to={"/products/1"}>
                    <button type="button">Women</button>
                </Link>
            </div>
            <div className="div3">
                <Link className="link" to={"/products/5"}>
                    <button type="button">New Season</button>
                </Link>
            </div>
            <div className="div4">
                <Link className="link" to={"/products/2"}>
                    <button type="button">Men</button>
                </Link>
            </div>
            <div className="div5">
                <Link className="link" to={"/products/3"}>
                    <button type="button">Accessories</button>
                </Link>
            </div>
            <div className="div6">
                <Link className="link"  to={"/products/4"}>
                    <button type="button">Shoes</button>
                </Link>
            </div>
        </Category>
        </>
    )
}
