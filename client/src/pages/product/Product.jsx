import { useState } from "react";
import { ProductItem } from "./StyledProduct";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdAddShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartReducer";

export default function Product() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const [selectedImg, setSelectedImg] = useState("image1")
  const [quantity, setQuantity] = useState(1)

  const {data, loading} = useFetch(`/products/${id}?populate=*`)
  console.log(data)

  return (
    <ProductItem>
      {loading ? "loading" :
      <>
      <div className="left">
        <div className="images">
          <img src={import.meta.env.VITE_APP_UPLOAD_URL + data?.attributes?.image1?.data?.attributes?.url} alt="image1" onClick={e=>setSelectedImg("image1")} />
          <img src={import.meta.env.VITE_APP_UPLOAD_URL + data?.attributes?.image2?.data?.attributes?.url} alt="image2" onClick={e=>setSelectedImg("image2")} />
        </div>
        <div className="mainImg">
          <img src={import.meta.env.VITE_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <div className="price">
          <span className="oldPrice">${data?.attributes?.oldPrice}</span>
          <span className="newPrice">${data?.attributes?.price}</span>
        </div>
        <p>{data?.attributes?.description}</p>
        <div className="quantity">
          <CiCircleMinus className="minus" onClick={()=>setQuantity((prev)=>prev === 1 ? 1 : prev - 1)} />
          {quantity}
          <CiCirclePlus className="plus" onClick={()=>setQuantity((prev)=>prev + 1)} />
        </div>
        <button className="add" onClick={() => dispatch(addToCart({
          id : data.id,
          title : data.attributes.title,
          description : data.attributes.description,
          oldPrice : data.attributes.oldPrice,
          price : data.attributes.price,
          image : data.attributes.image1.data.attributes.url,
          quantity,

        }))}>
          <MdAddShoppingCart className="cart" /> add to cart
        </button>
        <div className="links">
          <div className="item">
            <MdFavoriteBorder className="icon" /> add to wish list
          </div>
          <div className="item">
            <FaBalanceScale className="icon" /> add to compare
          </div>
        </div>
        <div className="info">
          <span>Product Type: Hoody</span>
          <span>Tag : Hoody, Hoodies, Trend</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
      </>}
    </ProductItem>
  )
}
