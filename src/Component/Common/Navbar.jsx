import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { CartD, FetchCartApi, Logout, MatchCartApi } from '../../Redux/Slices/AuthSlice'
import $ from 'jquery'
const Navbar = () => {
	const navigate = useNavigate()
	const data = useSelector((state) => {
		return state?.Auth?.authRedirect
	})
	const { matchUserCart, cartData, cardlength } = useSelector((state) => {
		return state?.Auth
	})
	// console.log(matchUserCart,'ghhhhhhhhhhhhhhh');
	const dispatch = useDispatch()
	const name = localStorage.getItem('name')
	const id = localStorage.getItem('id')
	const admin_token = localStorage.getItem('admin_token')
	const handelLogout = () => {
		dispatch(Logout())
	}
	useEffect(() => {
		dispatch(MatchCartApi(id))
		dispatch(FetchCartApi())
		navigate(data)
		$(".navbar-nav .nav-item").on("click", function () {
			$(".navbar-nav .nav-item").removeClass("active");
			$(this).addClass("active");
		});
	}, [dispatch,data,id])
	return (
		<>
			<div style={{ marginTop: '90px' }}>
				<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light fixed-top " id="ftco-navbar">
					<div className="container">
						<Link className="navbar-brand" to="/"><span className="flaticon-pizza-1 mr-1"></span>Pizza<br /><small>Delicous</small></Link>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="oi oi-menu"></span> Menu
						</button>
						<div className="collapse navbar-collapse" id="ftco-nav">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
								<li className="nav-item"><Link to="/menu" className="nav-link">Menu</Link></li>
								<li className="nav-item"><Link to="/blogmain" className="nav-link">Blog</Link></li>
								<li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
								<li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
								{/* <li className="nav-item"><Link to="/admindashboard" className="nav-link">Admin</Link></li> */}
								{
									!name ?
										// <li className="nav-item"><Link to="/login" className="nav-link">Log In</Link></li>
										<li className="nav-item"><Link to="/cart" className="nav-link">Cart</Link></li>
										:
										<li className="nav-item"><Link to="/cart" className="nav-link">Cart ({matchUserCart.data === '' || matchUserCart.data === undefined || matchUserCart.data === null ? 0 : matchUserCart.data.length})</Link></li>

								}

								{
									!name ?
										<li className="nav-item"><Link to="/login" className="nav-link">Log In</Link></li>
										:
										<>
											<li className="nav-item"><Link className="nav-link">{`Hi ${name}`}</Link></li>
											<li className="nav-item"><Link onClick={handelLogout} className="nav-link">Log Out</Link></li>
										</>
								}
							</ul>
						</div>
					</div>
				</nav >
			</div>
		</>
	)
}

export default Navbar