import React, { useState, useEffect } from "react";
import Layout from '../components/Layout';
import { getDoc, doc } from "firebase/firestore";
import fireDB from '../fireConfig';
import { useParams } from "react-router-dom";
const ProductInfo = () => {
  const [product, setProducts] = useState([]);
  const [loading , setloading] = useState(false);
  const params = useParams()
  useEffect(() => {
    getdata()
  }, []);
  async function getdata() {
    try {
      setloading(true)
      const productTemp = await getDoc(doc(fireDB, "products", params.id));

     setloading(false)
      setProducts(productTemp.data());
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }
  return (
    <Layout loading={loading}>
      <div className="container">
      <h1>Product Info</h1>

      {product && (<div>
        <p><b>{product.name}</b></p>
        <img src={product.image} className="product-info-img" alt=""/>
        <hr />
        <p>{product.description}</p>
        <div className="d-flex justify-content-end mt-3">
          <button>ADD TO CART</button>
        </div>
      </div>)}
      </div>
    </Layout>
  )
}

export default ProductInfo;
