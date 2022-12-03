import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import c  from './Explore.module.css'

const Explore = () => {

  const [productData, setProductData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/v2/allproducts")
      .then(response => response.json())
      .then(data => setProductData(data))
  }, [])

  console.log(productData);
  
  return (
    <div className={c.products}>
      {
          productData.map(({image, name, _id}) =>
            <article key={_id} className={c.productsItem}>
              <h1>{name}</h1>
              <img src={image[0].url} alt="" className={c.productImage}/>
              <Link to={`/explorenow/${_id}`}>Learn more</Link>
            </article>
          )
      }
    </div>
  )
}

export default Explore