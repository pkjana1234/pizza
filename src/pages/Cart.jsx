import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import { FetchCart, StoreCart } from '../Component/Core/CartData'
import '../Component/Core/Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { MatchCartApi } from '../Redux/Slices/AuthSlice';
import axios from 'axios';
import Navbar from '../Component/Common/Navbar';
import Footer from '../Component/Common/Footer';
import { Link } from 'react-router-dom';
const Cart = () => {
  const dispatch = useDispatch()
  const CartData = useSelector((state) => {
    return state?.Auth?.matchUserCart
  })
  const id = localStorage.getItem('id')

  let price = 0
  CartData.data?.map((e) => {
    return price += e.price
  })

  const handelClick = async(data) => {
    const a = CartData?.data?.filter((e)=>{
      return e.id !== data.id
    })
    console.log(a);
    await axios.patch(`${process.env.REACT_APP_AUTH_URL}cart/${id}`, {
      data: a
    })
    dispatch(MatchCartApi(id))
  }
  useEffect(() => {
    dispatch(MatchCartApi(id))
  }, [dispatch])
  // console.log(CartData);
  return (
    <>
    <Navbar/>
      {
        CartData === undefined ?
          <h4 className='text-center text-white py-5'>Empty Cart</h4>
          :
          <>
            <div className="row py-5 cardd">
              <div className="col-md-8 mx-auto">
                <div className="row">
                  {
                    CartData?.data?.length === 0 ?
                      <h4 className='mx-auto text-white'>Empty Cart</h4>
                      :
                      <>
                        <div className="col-md-8 cart">
                          <div className="title">
                            <div className="row">
                              <div className="col"><h4><b className='text-dark'>Shopping Cart</b></h4></div>
                              <div className="col align-self-center text-right text-muted">
                                <p>({CartData?.data?.length}) items</p></div>
                            </div>
                          </div>
                          {
                            CartData && CartData?.data?.map((e) => {
                              return (
                                <>
                                  <div className="row border-bottom mt-4 py-2">
                                    <div className="row main align-items-center">
                                      <div className="col-2"><img className="img-fluid" src={e.img} /></div>
                                      <div className="col">
                                        <div className="row text-muted">
                                          <p>{e.category}</p></div>
                                        <div className="row">
                                          <p>{e.title}</p></div>
                                      </div>
                                      <div className="col">
                                        <p>Rs. {e.price}/- </p><span className="close" onClick={() => { handelClick(e) }}>✕</span></div>
                                    </div>
                                  </div>
                                </>
                              )
                            })
                          }

                          <div className="back-to-shop"><Link to="/">←<span className="text-muted">Back to shop</span></Link></div>
                        </div>
                        <div className="col-md-4 summary">
                          <div><h5 className='text-dark'>Summary</h5></div>
                          <hr />
                          <div className="row">
                            <div className="col" style={{ paddingLeft: 0 }}>Items ({CartData?.data?.length})</div>
                            <div className="col text-right">Rs. {price}/-</div>
                          </div>
                          <form>
                            <p>SHIPPING</p>
                            <select><option className="text-muted">Standard-Delivery- Rs. 50/-</option></select>
                            <p>GIVE CODE</p>
                            <input id="code" placeholder="Enter your code" />
                          </form>
                          <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0', marginTop: '30px' }}>
                            <div className="col">TOTAL PRICE</div>
                            <div className="col text-right">Rs. {price + 50}/-</div>
                          </div>
                          <Link to ='/order'><button className="btn">CHECKOUT</button></Link>
                        </div>
                      </>
                  }

                </div>
              </div>
            </div>
          </>
      }
      <Footer/>
    </>
  )
}

export default Cart