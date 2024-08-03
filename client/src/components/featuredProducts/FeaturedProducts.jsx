import Card from "../Card/Card"
import { FeaturedProduct } from "./StyledFeaturedProducts"
import { useFetch } from "../../hooks/useFetch"

export default function FeaturedProducts({ type }) {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

    return (
        <FeaturedProduct>
            <div className="top">
                <h1>{type} Product</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, ad,
                    fugiat culpa mollitia quidem corporis, tempora ducimus distinctio voluptas tempore ipsum
                    fugit aspernatur dolor minus autem maxime nemo voluptatibus neque!
                </p>
            </div>
            <div className="bottom">
                {error ? <span className="error">Something went wrong</span>
                    : (loading ? <span className="loader"></span> : data?.slice().reverse().map(product => (
                        <Card key={product.id} product={product} />
                    )))}
            </div>
        </FeaturedProduct>
    )
}
