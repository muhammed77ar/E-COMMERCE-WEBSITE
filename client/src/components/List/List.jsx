import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Card from "../Card/Card";
import { Listt } from "./StyledList";

export default function List({ catId, maxPrice, sort, subCategories }) {

  const { data, loading, error } = useFetch(`/products?populate=*&[filters][categories][id][$eq]=${catId}${subCategories.map(item=>
    `&[filters][sub_categories][id][$eq]=${item}`)}
    &[filters][price][$lte]=${maxPrice}&sort=price:${sort}`)

    

  return (
    <Listt>
      {error ? <div className="errorContainer"><span className="error">Something went wrong</span></div> :
        (loading ? <div className="loadingContainer"><span className="loader"></span></div> : data?.map(product => (
          <Card product={product} key={product.id} />
        )))}
    </Listt>
  )
}
