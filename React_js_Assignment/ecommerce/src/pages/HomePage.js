import React, { useState , useEffect } from "react";
import Layout from '../components/Layout';
import { collection,addDocs, getDocs } from "firebase/firestore";
import fireDB from '../fireConfig';
import { ecommerceproducts } from "../ecommerce-products";
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { cleanup } from "@testing-library/react";

const Homepage = () => {
  const[products,setProducts] = useState([]);
  const {cartItems} = useSelector(state=>state.cartReducer)
  const [loading , setloading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(()=>{
    getdata()
  },[]);
  async function getdata() {
    setloading(true)
    try {
      const users = await getDocs(collection(fireDB, "products"));
      const productsArray = [];
      users.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const obj = {
          id: doc.id,
          ...doc.data(),
        }
        productsArray.push(obj)
        setloading(false)
      });
     setProducts(productsArray)
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }
 
useEffect(() =>{
  localStorage.setItem('cartItems',JSON.stringify(cartItems))
},[cartItems]
)

  const addToCart= (product) =>{
        dispatch({type:'ADD_TO_CART', payload:product});
  };
  return (
    <Layout loading={loading}>
     <div className="container">
       <div className="row">
         {products.map((product)=>{
           return <div className="col-md-4">
             <div className="m-2 p-1 product position-relative">
              <div className="product-content">
              <p>{product.name}</p>
              <div className="text-center">
              <img src={product.imageURL} alt="" className="product-img"/>
              </div>
              </div>
              <div className="product-actions">
                  <h2>{product.price}Rs.</h2>
                  <div className="d-flex">
                   <button className="button" onClick={()=>addToCart(product)}>ADD TO CART</button>
                   <button className="button" onClick={()=>
                   navigate('/productinfo/${product.id}')
                  }>VIEW</button>
                  </div>
          
                </div>
           </div>
           </div>
         })}
       </div>
     </div>
    </Layout>
  )
}

export default Homepage;
