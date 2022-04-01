
   
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useSelector } from 'react-redux';
import {FaTrash} from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const Cartpage = () => {
  const {cartItems} = useSelector(state => state.cartReducer)
  const [totalAmmount , settotalAmmount] = useState(0)
  const dispatch = useDispatch()

  useEffect(() =>{
    let temp=0;
    cartItems.forEach((cartItem)=> {
          temp=temp+cartItem.price;      
    });
    settotalAmmount(temp)
  },[cartItems]
  );

  useEffect(() =>{
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
  },[cartItems]
  )
  const deleteFromCart= (product) =>{
    dispatch({type:'DELETE_FROM_CART', payload:product});
};
  return (
    <Layout>
      <table className='table mt-3'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item=>{
           return <tr>
              <td><img src={item.imageURL} height='100' width='100' alt=''/></td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><FaTrash onClick={()=>deleteFromCart(item)}/></td>
            </tr>
          })}
        </tbody>
      </table>
    <div className='d-flex justify-content-end'>
       <h1 className='total-ammount'>total Ammount = {totalAmmount} Rs.</h1>
    </div>
    <div className='d-flex justify-content-end mt-3'>
       <button>Place Order</button>
    </div>
    </Layout>
  )
}

export default Cartpage;