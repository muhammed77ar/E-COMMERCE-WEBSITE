import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import { ProductsCategory } from "./StyledProducts";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

export default function Products() {
  const { id } = useParams()
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState("desc")
  const [selectedSubCats, setSelectedSubCats] = useState([])



  const { data, loading, error } = useFetch(`sub-categories?[filters][categories][id][$eq]=${id}`)

  const handelChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter(item => item !== value))
  }

  return (
    <ProductsCategory>
      <div className="left">
        <div className="div1">
          <div className="filterItem">
            <h2>Product Categories</h2>
            {data?.map((item) => (
              <div className="inputItem" key={item.id}>
              <input
                className="checkboxInput"
                type="checkbox"
                name={`cb-${item.id}`}
                id={`cb-${item.id}`}
                value={item.id}
                onChange={handelChange}
              />
              <label className="checkboxLabel" htmlFor={`cb-${item.id}`}>{item.attributes.title}</label>
            </div>
            ))}
          </div>
          <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="inputItem">
              <span>0</span>
              <input type="range" name="" id="" min={0} max={1000}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem2">
            <h2>Sort by</h2>
            <div className="inputItem2">
              <input type="radio" name="price" id="asc" value="asc"
                onChange={(e) => setSort(e.target.value)}
              />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="inputItem2">
              <input type="radio" name="price" id="desc" value="desc"
                onChange={(e) => setSort(e.target.value)}
              />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="div2">
        </div>
        <div className="div3">
          <List catId={id} maxPrice={maxPrice} sort={sort} subCategories={selectedSubCats} />
        </div>
      </div>
    </ProductsCategory>
  )
}
