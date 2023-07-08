import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MenuApi } from '../../Redux/Slices/HomeDataSlice';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StoreCart } from './CartData';
import { CartD, FetchCartApi, MatchCartApi, StoreCartApi } from '../../Redux/Slices/AuthSlice';
import axios from 'axios';
const Menu = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [cat, setCat] = useState(null)
	const { menu } = useSelector((state) => {
		return state?.Home
	})
	const { cartData, matchUserCart } = useSelector((state) => {
		return state?.Auth
	})
	const catIData = menu && menu.filter((e) => {
		return (
			e.category == 'Pizza'
		)
	})
	const handelClick = (cata) => {
		const catData = menu && menu.filter((e) => {
			return (
				e.category == cata
			)
		})
		setCat(catData)
		// console.log(catData);
	}
	var name = localStorage.getItem('name')
	var id = localStorage.getItem('id')
	var phone = localStorage.getItem('phone')
	var email = localStorage.getItem('email')
	console.log(matchUserCart, 'fffffffffffffffffffff');
	var cartDatas = []
	// console.log(cartDatas,'duikwghuihw');
	var matchuserCart = cartData?.filter((e) => {
		return e.user_id == id
	})
	const handelCart = async (data) => {
		dispatch(MatchCartApi(id))
		if (name === null && id === null) {
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
			cartDatas.push(data)
			// console.log(matchuserCart,'cart');
			dispatch(MatchCartApi(id))
			if (matchUserCart.data?.length === 0 || matchUserCart.data === undefined) {
				dispatch(StoreCartApi(
					{
						name: name,
						user_id: id,
						phone: phone,
						email: email,
						id: id,
						data: [...cartDatas]
					}
				))
			} else {
				try {
					const res = await axios.patch(`${process.env.REACT_APP_AUTH_URL}cart/${id}`, {
						data: matchUserCart.data.concat(cartDatas)
					})
					dispatch(MatchCartApi(id))
					// console.log(res);
				} catch (error) {
					console.log(error);
				}
			}
			toast.success(`${data.title} has been successfully added in cart`)
		}
	}
	useEffect(() => {
		dispatch(MenuApi())
		dispatch(MatchCartApi(id))
		dispatch(FetchCartApi())
		// dispatch(CartD())
	}, [dispatch])

	return (
		<>
			<section className="ftco-menu">
				<div className="container-fluid">
					<div className="row d-md-flex">
						<div className="col-lg-4 ftco-animate img f-menu-img mb-5 mb-md-0" style={{ "backgroundImage": "url(images/about.jpg)" }}>
						</div>
						<div className="col-lg-8 ftco-animate p-md-5">
							<div className="row">
								<div className="col-md-12 nav-link-wrap mb-5">
									<div className="nav ftco-animate nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
										<a className="nav-link active" id="v-pills-1-tab" onClick={() => { handelClick('Pizza') }}>Pizza</a>

										<a className="nav-link" id="v-pills-2-tab" onClick={() => { handelClick('Drinks') }}>Drinks</a>

										<a className="nav-link" id="v-pills-3-tab" onClick={() => { handelClick('Burgers') }}>Burgers</a>

										<a className="nav-link" id="v-pills-4-tab" onClick={() => { handelClick('Pasta') }}>Pasta</a>
									</div>
								</div>
								<div className="col-md-12 d-flex align-items-center">

									<div className="tab-content ftco-animate" id="v-pills-tabContent">

										<div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
											<div className="row">
												{
													cat === null ?
														catIData && catIData.slice(0, 3).map((e) => {
															return (
																<>
																	<div className="col-md-4 text-center">
																		<div className="menu-wrap">
																			<a href="#" className="menu-img img mb-4" style={{ "backgroundImage": `url(${e.img})` }}></a>
																			<div className="text">
																				<h3><a href="#">{e.title}</a></h3>
																				<p>{e.subtitle}</p>
																				<p className="price"><span>Rs. {e.price}/- only</span></p>
																				<p><a onClick={() => { handelCart(e) }} className="btn btn-white btn-outline-white">Add to cart</a></p>
																			</div>
																		</div>
																	</div>
																</>
															)
														})
														:
														cat && cat.slice(0, 3).map((e) => {
															return (
																<>
																	<div className="col-md-4 text-center">
																		<div className="menu-wrap">
																			<a href="#" className="menu-img img mb-4" style={{ "backgroundImage": `url(${e.img})` }}></a>
																			<div className="text">
																				<h3><a href="#">{e.title}</a></h3>
																				<p>{e.subtitle}</p>
																				<p className="price"><span>Rs. {e.price}/- only</span></p>
																				<p><a onClick={() => { handelCart(e) }} className="btn btn-white btn-outline-white">Add to cart</a></p>
																			</div>
																		</div>
																	</div>
																</>
															)
														})
												}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Menu