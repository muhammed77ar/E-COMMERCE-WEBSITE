import { SocialM } from "./StyledSocialMedia";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function SocialMedia() {
  return (
    <SocialM>
        <div className="facebook">
            <Link to=""><FaFacebook /></Link>
        </div>
        <div className="instagram">
            <Link to=""><FaSquareInstagram /></Link>
        </div>
        <div className="x">
            <Link to=""><FaXTwitter /></Link>
        </div>
    </SocialM>
  )
}
