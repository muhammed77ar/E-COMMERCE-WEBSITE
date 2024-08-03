import { Footerr } from "./StyledFooter";

export default function Footer() {
  return (
    <Footerr>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About Us</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Non illum perspiciatis quo omnis doloremque mollitia voluptas soluta, repudiandae reiciendis, 
            ducimus architecto officia possimus, suscipit repellendus consequatur  voluptatibus consectetur </span>
        </div>
        <div className="item">
        <h1>Contact Us</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Non illum perspiciatis quo omnis doloremque mollitia voluptas soluta, repudiandae reiciendis, 
            ducimus architecto officia possimus, suscipit repellendus consequatur voluptatibus consectetur ipsam </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">FashionStore</span>
          <span className="copyright">© Copyright 2024. All Rights Reserved</span>
        </div>
        <div className="right">
          <div className="PaymentImages">
            <img src="../paymentImgs/Stripe.png" alt="stripe" />
            <img src="../paymentImgs/mastercard.png" alt="mastercard" />
            <img src="../paymentImgs/Paypal.png" alt="paypal" />
            <img src="../paymentImgs/Visa.png" alt="visa" />
          </div>
        </div>
      </div>
    </Footerr>
  )
}
