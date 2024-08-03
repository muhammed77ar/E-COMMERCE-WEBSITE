import Categories from "../../components/categories/Categories";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import Slider from "../../components/slider/Slider";
import SocialMedia from "../../components/socialMedia/SocialMedia";



export default function Home() {
  
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <SocialMedia />
    </div>
  )
}
