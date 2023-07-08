import React, { useEffect } from 'react'
import $ from "jquery";
import { useDispatch, useSelector } from 'react-redux';
import { CustomerApi } from '../../Redux/Slices/HomeDataSlice';
const Testimonial = () => {
	const dispatch = useDispatch()
	const {customer} = useSelector((state) => {
		// console.log(state?.Home?.banner);
		return state?.Home
	})
	useEffect(() => {
		dispatch(CustomerApi())
	}, [])
	return (
		<>
			<section className="ftco-gallery">
				<div className="container-wrap">
					<div className="row no-gutters">
						{
							customer && customer.map((e) => {
								return (
									<>
										<div className="col-md-3 ftco-animate">
											<a href="#" className="gallery img d-flex align-items-center" style={{ "background-image": `url(${e.img})` }}>
												<div className="icon mb-4 d-flex align-items-center justify-content-center">
													<span className="icon-search"></span>
												</div>
											</a>
										</div>
									</>
								)
							})
						}
					</div>
				</div>
			</section>


			{/* <section className="ftco-counter ftco-bg-dark img" id="section-counter" style={{ "background-image": "url(images/bg_2.jpg)" }} data-stellar-background-ratio="0.5">
				<div className="overlay"></div>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-10">
							<div className="row">
								<div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
									<div className="block-18 text-center">
										<div className="text">
											<div className="icon"><span className="flaticon-pizza-1"></span></div>
											<strong className="number" data-number="100">0</strong>
											<span>Pizza Branches</span>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
									<div className="block-18 text-center">
										<div className="text">
											<div className="icon"><span className="flaticon-medal"></span></div>
											<strong className="number" data-number="85">0</strong>
											<span>Number of Awards</span>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
									<div className="block-18 text-center">
										<div className="text">
											<div className="icon"><span className="flaticon-laugh"></span></div>
											<strong className="number" data-number="10567">0</strong>
											<span>Happy Customer</span>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
									<div className="block-18 text-center">
										<div className="text">
											<div className="icon"><span className="flaticon-chef"></span></div>
											<strong className="number" data-number="900">0</strong>
											<span>Staff</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
		</>
	)
}

export default Testimonial