import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { SingleMenuApi } from '../../Redux/Slices/HomeDataSlice'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'
import swal from 'sweetalert'
import { MatchCartApi, StoreCartApi } from '../../Redux/Slices/AuthSlice'
import axios from 'axios'
import { toast } from 'react-toastify'

const SingleMeal = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    let id1 = localStorage.getItem("id");
    const navigate = useNavigate()
    const { cartData,matchUserCart } = useSelector((state) => {
        return state?.Auth
	})
    const { singleMenu } = useSelector((state) => {
        return state?.Home
    })
    var matchuserCart = cartData?.filter((e) => {
		return e.user_id == id1 
	})
    // console.log(matchuserCart[0].data, 'cart');
    var name = localStorage.getItem('name')
    let phone = localStorage.getItem("phone");
    let email = localStorage.getItem("email");
    let cartDatas =[]
    const handelClick = async(data) => {
        if (id1 === null) {
            swal({
                title: "Are you sure? You want to Login",
                text: "In order to add to Cart You have to login First!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        navigate('/login')
                    }
                });
        } else {
            // dispatch(FetchCartApi())
            cartDatas.push(data)
           
            if (matchuserCart?.length === 0 || matchuserCart === undefined) {
                dispatch(StoreCartApi(
                    {
                        name: name,
                        user_id: id1,
                        phone : phone,
                        email :email,
                        id: id1,
                        data:  cartDatas
                    }
                ))
            } else {
                try {
                    const res = await axios.patch(`${process.env.REACT_APP_AUTH_URL}cart/${id1}`, {
                        data: matchuserCart[0].data.concat(cartDatas)
                    })
                    console.log(res);
                } catch (error) {
                    console.log(error);
                }
            }
            toast.success(`${data.title} has been successfully added in cart`)
            dispatch(MatchCartApi(id1))
        }
    }
    useEffect(() => {
        dispatch(MatchCartApi(id1))
        dispatch(SingleMenuApi(id))
    }, [])
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6 align-self-center">
                        <div className="">
                            <img src={`${singleMenu.img}`} className='img-fluid' alt="dwdw" />
                        </div>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <h4>{singleMenu.category}</h4>
                        <h2>{singleMenu.title}</h2>
                        <p>{singleMenu.subtitle}</p>
                        <p>{singleMenu.content}</p>
                        <h5 className="fw-bold">Price - {singleMenu.price} only</h5>
                        <h6 className="fw-bold">Discount - {singleMenu.discount}</h6>
                        <div className="py-4">
                            <button className='btn btn-outline-warning mx-3' onClick={() => { handelClick(singleMenu) }}>Add to Cart</button>
                            <Link to='/'><button className='btn btn-outline-success'>Back to home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SingleMeal
