import { CardStyle } from "./styledCard";
import {Link} from "react-router-dom"

export default function Card({product}) {
  return (
    <Link style={{textDecoration:"none", color:"black"}} to={`/product/${product.id}`}>
    <CardStyle>
        <div className="image">
            {product?.attributes.isNew && <span>New Season</span>}
            <img src={import.meta.env.VITE_APP_UPLOAD_URL + product.attributes.image1.data.attributes.url} className="firstImage" alt="" />
            <img src={import.meta.env.VITE_APP_UPLOAD_URL + product.attributes.image2.data.attributes.url} className="secondImage" alt="" />
        </div>
        <h2>{product?.attributes.title?.substring(0, 20)}...</h2>
        <div className="price">
            <h3>${product?.attributes.oldPrice}</h3>
            <h3>${product?.attributes.price}</h3>
        </div>
    </CardStyle>
    </Link>
  )
}
